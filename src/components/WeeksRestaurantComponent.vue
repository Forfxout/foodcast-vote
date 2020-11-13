<template>
  <div v-if="getRestaurantWeek">
    <div class="flex font-light flex-col justify-center items-center">
      <div class="text-3xl py-4 font-normal">
        This week's restaurant
      </div>
      <div class="flex">
        <div class="flex flex-col text-center items-center sm:hidden">
          <div class="text-4xl font-medium">
            {{ getRestaurantWeek.name }}
          </div>
          <div class="py-4 px-4">
            <img :src="getRestaurantWeek.image" alt="">
          </div>
          <div class="text-xl px-4">
            <div class="font-light">
              {{ getRestaurantWeek.description }}
            </div>
            <div class="flex justify-center pt-4">
              <img class="px-4" src="../assets/icons/map.svg" alt="">
              <div class="text-xl">
                {{ getRestaurantWeek.location }} (<a style="color: #FF5D2E" target="_blank"
                                                     :href="getRestaurantWeek.yelp">Yelp</a>)
              </div>
            </div>
          </div>
        </div>
        <div class="hidden sm:block flex justify-between px-8 xl:px-48">
          <div class="flex flex-col">
            <div class="text-4xl font-medium">
              {{ getRestaurantWeek.name }}
            </div>
            <div class="flex">
              <div class="w-4/5">
                <div class="font-light text-xl xl:text-2xl">
                  {{ getRestaurantWeek.description }}
                </div>
                <div>
                  <div class="flex pt-4">
                    <img class="px-4" src="../assets/icons/map.svg" alt="">
                    <div class="text-xl xl:text-2xl">
                      {{ getRestaurantWeek.location }} (<a style="color: #FF5D2E" target="_blank"
                                                           :href="getRestaurantWeek.yelp">Yelp</a>)
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:px-16"></div>
              <div>
                <div class="ml-4">
                  <img :src="getRestaurantWeek.image" alt="">
                </div>
              </div>
            </div>
          </div>
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
