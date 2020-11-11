<template>
  <div>
    <div>
      <HeaderComponent/>
    </div>
    <div>
      <AboutComponent/>
    </div>
    <div>
      <WeeksRestaurantComponent
        :restaurantName="restaurantInformation.name"
        :description="restaurantInformation.description"
        :location="restaurantInformation.location"
        :image="restaurantInformation.image"
        :dishCount="dishCount"
        :yelp="restaurantInformation.yelp"
      />
    </div>
    <div class="text-center text-3xl font-bold pt-6" id="chooseDishes">
      Let's choose the dish you want to get!
    </div>
    <div class="flex flex-wrap w-full px-64">
      <DishComponent
        class="p-12 w-1/2"
        v-for="(dish, index) in dishes" :key="index"
        :dishId="dish._id"
        :dishName="dish.name"
        :description="dish.description"
        :restaurantLocation="dish.by"
        :dishImage="dish.image"
        :left="dish.left"
        :step="dish.step"
        :max="dish.max"
        :stock="dish.stock"
        :min="dish.min"
        :cost="dish.cost"
        :instagram="dish.links.instagram"
        :facebook="dish.links.facebook"
        :linkedin="dish.links.linkedin"
        :twitter="dish.links.twitter"
        @selectedDish="selectedDish"
      />
    </div>
    <div class="mb-12">
      <PopularQuestionsComponent/>
    </div>
    <div>
      <FooterComponent
        :location="information.location"
        :phone="information.phone"
        :email="information.email"
      />
    </div>
    <div>
      <OrderComponent></OrderComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import AboutComponent from '@/components/AboutComponent'
import WeeksRestaurantComponent from '@/components/WeeksRestaurantComponent'
import DishComponent from '@/components/DishComponent'
import PopularQuestionsComponent from '@/components/PopularQuestionsComponent'
import FooterComponent from '@/components/FooterComponent'
import OrderComponent from '@/components/OrderComponent'
import { mapMutations } from 'vuex'

export default {
  components: {
    HeaderComponent,
    AboutComponent,
    WeeksRestaurantComponent,
    DishComponent,
    PopularQuestionsComponent,
    FooterComponent,
    OrderComponent
  },
  data () {
    return {
      information: [],
      restaurantInformation: [],
      dishes: [],
      dishCount: 0
    }
  },
  methods: {
    ...mapMutations('order', ['ADD_DISH']),
    async getInformation () {
      let result
      try {
        result = await this.http.get('http://64.225.126.215:3000/v1/info')
      } catch (e) {

      }
      this.information = result.data
    },
    async getRestaurantInformation () {
      let result
      try {
        result = await this.http.get('http://64.225.126.215:3000/v1/restaurant/week')
      } catch (e) {

      }
      this.restaurantInformation = result.data
    },
    async getRestaurantDishes () {
      let result
      try {
        result = await this.http.get('http://64.225.126.215:3000/v1/restaurant/week')
      } catch (e) {

      }
      this.dishCount = Object.keys(result.data.dishes).length
      this.dishes = result.data.dishes
      // result.data.dishes.links.forEach(element => console.log(element))
      console.log(result.data.dishes.links)
    },
    selectedDish (data) {
      this.ADD_DISH(data)
    }
  },
  async mounted () {
    await this.getInformation()
    await this.getRestaurantInformation()
    await this.getRestaurantDishes()
  }
}
</script>

<style>
</style>
