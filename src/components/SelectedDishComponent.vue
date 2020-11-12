<template>
  <div class="flex py-4 main border-b flex-col">
    <div class="flex items-center">
      <div class="flex w-full justify-between">
        <div class="flex w-4/5">
          <div class="w-32 bg-cover" :style="'background-image: url(' + dishImage +')'"></div>
          <div class="flex flex-col justify-start p-4 w-4/5">
            <div class="font-semibold text-sm">
              {{ dishName }}
            </div>
            <div class="font-light">
              by {{ restaurantLocation }}
            </div>
          </div>
        </div>
        <div class="flex w-1/2 items-center">
          <div class="flex items-center mr-2">
            <div class="select-none">
              <img src="../assets/icons/count-minus.svg" class="w-12 btn rounded-full shadow-none" @click="countMinus">
            </div>
            <div class="font-medium text-2xl w-16 flex justify-center mx-2">
              {{ countOfDish }}
            </div>
            <div>
              <img src="../assets/icons/count-plus.svg" class="w-12 btn rounded-full shadow-none" @click="countPlus">
            </div>
          </div>
          <div class="font-medium text-2xl w-32 dish-price-total text-center">
            ${{ dishCost * countOfDish }}
          </div>
          <div class="flex justify-end px-6 select-none">
            <img src="../assets/icons/cancel-dish-button.svg" class="btn w-12 rounded-full shadow-none" alt=""
                 @click="remove">
          </div>
        </div>
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
