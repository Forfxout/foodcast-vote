<template>
  <div class="flex flex-col">
    <div class="flex items-center">
      <div class="p-4">
        <img :src="dishImage" alt="" width="100" height="100">
      </div>
      <div class="flex flex-col justify-start p-4">
        <div class="font-semibold text-xl">
          {{ dishName }}
        </div>
        <div class="font-medium">
          {{ restaurantLocation }}
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div>
          <img src="../assets/icons/count-minus.svg" alt="" @click="countMinus">
        </div>
        <div class="font-medium text-2xl w-10 flex justify-center">
          {{ countOfDish }}
        </div>
        <div>
          <img src="../assets/icons/count-plus.svg" alt="" @click="countPlus">
        </div>
      </div>
      <div class="font-medium text-2xl px-6">
        $ {{ dishCost }}
      </div>
      <div class="flex justify-end px-6">
        <img src="../assets/icons/cancel-dish-button.svg" alt="" @click="() => REMOVE_DISH(dishId)">
      </div>
    </div>
    <div>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['dishName', 'restaurantLocation', 'dishImage', 'dishCost', 'dishId'],
  data () {
    return {
      countOfDish: 0
    }
  },
  methods: {
    ...mapMutations('order', ['REMOVE_DISH']),
    countMinus () {
      console.log(this.countOfDish)
      if (this.countOfDish > 0) {
        this.countOfDish--
      }
    },
    countPlus () {
      console.log(this.countOfDish)
      if (this.countOfDish >= 0) {
        this.countOfDish++
      }
    }
  }
}
</script>

<style lang="sass" scoped>
hr
  display: block
  border: 0
  border-top: 1px solid #DADADA
</style>
