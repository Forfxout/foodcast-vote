<template>
  <div class="flex flex-col text-center justify-center">
    <div>
      <img :src="restaurantImage" alt="">
    </div>
    <div class="flex flex-col p-4">
      <div class="text-2xl h-12">
        {{ restaurantName }}
      </div>
      <div class="font-light text-xl py-2">
        {{ restaurantDescription }}
      </div>
      <div class="flex justify-center text-lg">
        <img src="../assets/icons/map.svg" alt="">
        <div class="ml-2">
          {{ restaurantLocation }} (<a class="text-orange" target="_blank"
                                       :href="yelp">Yelp</a>)
        </div>
      </div>
      <div class="text-lg">
        Event ended <span class="font-light">{{ localEndTime }}</span>
      </div>
      <div v-if="checkAdminAccess" class="flex justify-center items-center font-light text-lg">
        <span class="text-orange cursor-pointer" @click="openOrderPanel(restaurantId)">View orders</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  props: ['restaurantId', 'restaurantName', 'restaurantDescription', 'endTime', 'yelp', 'restaurantLocation', 'restaurantImage', 'checkAdminAccess'],
  data () {
    return {
      localEndTime: moment(this.endTime).format('MMMM Do YYYY')
    }
  },
  methods: {
    openOrderPanel (restaurantId) {
      this.$router.push({ path: `orders/${restaurantId}` })
    }
  }
}
</script>

<style scoped>

</style>
