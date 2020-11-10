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
      />
    </div>
    <div class="text-center text-3xl font-bold pt-6" id="chooseDishes">
      Let's choose the dish you want to get!
    </div>
    <div class="flex flex-wrap w-full px-64">
      <DishComponent
        v-for="(dish, index) in dishes" :key="index"
        :dishName="dish.name"
        :restaurantLocation="dish.by"
        restaurantImage="dish.image"
        :left="dish.left"
        :step="dish.step"
        :price="dish.price"
        :stock="dish.stock"
        :cost="dish.cost"
        class="p-12 w-1/2"
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
      <OrderComponent/>
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
