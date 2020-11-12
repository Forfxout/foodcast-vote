<template>
  <div v-if="getRestaurantWeek">
    <div class="flex font-light flex-col justify-center items-center">
      <div class="text-3xl my-20 font-normal">
        This week's restaurant
      </div>
      <div class="flex font-light">
        <div class="flex flex-col">
          <div class="text-3xl font-medium -mt-4">
            {{ getRestaurantWeek.name }}
          </div>
          <div class="text-xl py-4">
            <div class="font-light">
              {{ getRestaurantWeek.description }}
            </div>
            <div class="text-xl py-6">
              Today Bevri shows us {{ dishCount }} exclusive dishes you can vote for and get on Monday.
            </div>
            <div class="flex">
              <div class="px-4">
                <img src="../assets/icons/map.svg" alt="">
              </div>
              <div class="text-xl">
                {{ getRestaurantWeek.location }} (<a style="color: #FF5D2E" target="_blank"
                                                     :href="getRestaurantWeek.yelp">Yelp</a>)
              </div>
            </div>
          </div>
        </div>
        <div class="px-8"></div>
        <div class="py-10">
          <img :src="getRestaurantWeek.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['dishCount'],
  computed: {
    ...mapGetters('restaurant', ['getRestaurantWeek'])
  }
}
</script>

<style scoped>

</style>
