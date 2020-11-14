<template>
  <div>
    <div>
      <HeaderComponent/>
    </div>
    <div>
      <AboutComponent/>
    </div>
    <div>
      <WeeksRestaurantComponent/>
    </div>
    <div class="text-center text-3xl px-6 pt-6 xl:pb-4 xl:pt-16" id="chooseDishes">
      Let's choose the dish you want to get!
    </div>
    <div class="flex flex-wrap xl:px-48">
      <DishComponent
        class="p-8 pb-0 w-full sm:w-1/2"
        v-for="(dish, index) in getRestaurantWeekDishes" :key="index"
        :active="getDishes.map(x => x.dishId).includes(dish._id)"
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
    <fade-transition mode="out-in" :duration="100">
      <div
        v-if="modals.order && getDishes.length"
        class="order-layout fixed top-0 left-0 w-full h-screen z-50"
      >
        <div class="fixed order-modal w-full md:w-3/5">
          <OrderComponent @close="modals.order = false"></OrderComponent>
        </div>
      </div>
    </fade-transition>
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
import { mapMutations, mapGetters } from 'vuex'

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
      modals: {
        order: false
      }
    }
  },
  computed: {
    ...mapGetters('order', ['getDishes']),
    ...mapGetters('restaurant', ['getRestaurantWeekDishes'])
  },
  methods: {
    ...mapMutations('order', ['ADD_DISH', 'SET_ORDER_DISHES']),
    ...mapMutations('restaurant', ['SET_RESTAURANT_WEEK']),
    async getInformation () {
      let result
      try {
        result = await this.http.get('/v1/info')
      } catch (e) {

      }
      this.information = result.data
    },
    async getRestaurantInformation () {
      let result
      try {
        result = await this.http.get('/v1/restaurant/week')
      } catch (e) {

      }
      this.SET_RESTAURANT_WEEK(result.data)
    },
    selectedDish (data) {
      this.ADD_DISH(data)
      this.modals.order = true
    }
  },
  async mounted () {
    await this.getInformation()
    await this.getRestaurantInformation()
  }
}
</script>

<style lang="sass">
button, .btn
  transition: .2s

  @apply shadow-lg select-none cursor-pointer

  &:hover
    @apply shadow-xl
    transform: translateY(-2px)
    transition: .2s

  &:focus
    @apply outline-none

  &:active
    @apply shadow-md
    transform: translateY(2px)
    transition: .1s

.order-layout
  background: rgba(0, 0, 0, 0.4)

.order-modal
  top: 50%
  left: 50%

  @apply w-1/2 bg-white rounded-lg z-40 shadow-lg
  transform: translate(-50%, -50%)
</style>
