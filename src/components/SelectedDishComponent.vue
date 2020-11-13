<template>
  <div class="flex py-4 main border-b">
    <div class="flex flex-col">
      <div class="w-20 h-20 bg-cover" :style="'background-image: url(' + dishImage +')'"></div>
      <div class="flex items-center mr-2 w-20">
        <div class="select-none">
          <img src="../assets/icons/count-minus.svg" class="w-8 btn rounded-full shadow-none" @click="countMinus">
        </div>
        <div class="font-medium text-2xl w-8 flex justify-center mx-2">
          {{ countOfDish }}
        </div>
        <div>
          <img src="../assets/icons/count-plus.svg" class="w-8 btn rounded-full shadow-none" @click="countPlus">
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center">
        <div class="w-64 h-20">
          <div class="flex flex-col">
            <div class="text-sm">
              {{ dishName }}
            </div>
            <div class="text-sm font-light">
              by {{ restaurantLocation }}
            </div>
          </div>
        </div>
        <div class="w-1/4">
          <div class="select-none absolute right-0 pr-4">
            <img src="../assets/icons/cancel-dish-button.svg" class="btn w-8 rounded-full shadow-none" alt=""
                 @click="remove">
          </div>
        </div>
      </div>
      <div class="font-medium text-2xl w-8 dish-price-total">
        ${{ dishCost * countOfDish }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['dishName', 'restaurantLocation', 'dishImage', 'dishCost', 'dishId', 'dishLeft', 'selectedCount'],
  data () {
    return {
      countOfDish: this.selectedCount
    }
  },
  methods: {
    ...mapMutations('order', ['REMOVE_DISH']),
    ...mapMutations('order', ['SET_DISHES_COUNT']),
    remove () {
      this.$emit('remove')
      this.REMOVE_DISH(this.dishId)
    },
    countMinus () {
      if (this.countOfDish > 0) {
        this.countOfDish--
        this.$emit('update:price', { id: this.dishId, total: this.countOfDish * this.dishCost })
        this.SET_DISHES_COUNT({ id: this.dishId, count: this.countOfDish, total: this.countOfDish * this.dishCost })
      }
    },
    countPlus () {
      if (this.countOfDish < this.$props.dishLeft) {
        this.countOfDish++
        this.$emit('update:price', { id: this.dishId, total: this.countOfDish * this.dishCost })
        this.SET_DISHES_COUNT({ id: this.dishId, count: this.countOfDish, total: this.countOfDish * this.dishCost })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  border-color: #DADADA
</style>
