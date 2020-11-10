<template>
  <div>
    <div>
      <HeaderComponent />
    </div>
    <div>
      <AboutComponent />
    </div>
    <div>
      <WeeksRestaurantComponent
        :restaurantName="restaurantInformation.name"
        :description="restaurantInformation.description"
        :location="restaurantInformation.location"
        :image="restaurantInformation.image"
      />
    </div>
    <div v-for="(dish, index) in dishes" :key="index">
      <DishComponent
        :dishName="dish.dishName"
        :restaurantLocation="dish.by"
        restaurantImage="dish.image"
        :left="dish.left"
        :step="dish.step"
        :price="dish.price"
        :stock="dish.stock"
        :cost="dish.cost"
      />
    </div>
    <div class="mb-12">
      <PopularQuestionsComponent />
    </div>
    <div>
      <FooterComponent
        :location="information.location"
        :phone="information.phone"
        :email="information.email"
      />
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

export default {
  components: {
    HeaderComponent,
    AboutComponent,
    WeeksRestaurantComponent,
    DishComponent,
    PopularQuestionsComponent,
    FooterComponent
  },
  data () {
    return {
      information: [],
      restaurantInformation: [],
      dishes: []
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
      this.dishes = result.data.dishes
    }
  },
  async mounted () {
    await this.getInformation()
    await this.getRestaurantInformation()
    await this.getRestaurantDishes()
    console.log(this.dishes)
  }
}

</script>

<style>
</style>
