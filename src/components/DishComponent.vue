<template>
  <div class="flex flex-col w-1/3">
    <!--        <DishPictureComponent/>-->
    <div class="flex flex-col p-6">
      <div class="text-2xl font-bold pb-2"></div>
      <div class="flex justify-between">
        <div class="text-sm">
          {{ restaurantLocation }}
        </div>
        <div class="flex">
          <div class="px-1">
            <a href="">
              <img src="../assets/icons/social/instagram.svg" alt="" />
            </a>
          </div>
          <div class="px-1">
            <a href="">
              <img src="../assets/icons/social/facebook.svg" alt="" />
            </a>
          </div>
          <div class="px-1">
            <a href="">
              <img src="../assets/icons/social/linkedin.svg" alt="" />
            </a>
          </div>
          <div class="px-1">
            <a href="">
              <img src="../assets/icons/social/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="pt-10">
        <div class="flex justify-between">
          <div>
            <span> $ {{ minPrice.toFixed(2) }} </span>
          </div>
          <div>
            <span> $ {{ price.toFixed(2) }} </span>
          </div>
        </div>
        <vue-slider
          v-model="cost"
          :min="minPrice"
          :max="price"
          :tooltip="'always'"
          :disabled="true"
        >
          <!--          <template v-slot:tooltip="{{cost}}">-->
          <!--            <div class="custom-tooltip">$ {{ cost.toFixed(2) }}</div>-->
          <!--          </template>-->
        </vue-slider>
      </div>
      <div class="flex justify-between items-center py-4">
        <div
          class="border-2 border-black flex flex-col items-center justify-center px-4 py-1 rounded"
        >
          <div class="text-xs">time left</div>
          <div>
            <DishCounterComponent />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="flex flex-col px-2 text-sm">
            <div>{{ left }} of {{ stock }}</div>
            <div>plates left</div>
          </div>
          <div>
            <img src="../assets/icons/plate-card.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center text-white text-2xl pt-2">
        <button>Buy</button>
      </div>
      <div class="flex justify-center items-center py-2 text-sm">
        * 1 vote = ${{ step }}
      </div>
    </div>
  </div>
</template>

<script>
// import DishPictureComponent from '@/components/DishPictureComponent'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import DishCounterComponent from '../components/DishCounterComponent.vue'

export default {
  props: ['dishName', 'restaurantLocation', 'restaurantImage', 'left', 'step', 'price', 'stock', 'cost'],
  components: {
    // DishPictureComponent,
    VueSlider,
    DishCounterComponent
  },
  computed: {
    minPrice () {
      return this.price - (this.stock * this.step)
    }
  }
}
</script>

<style lang="sass">
button
  background: #000000
  border-radius: 100px
  width: 240px
  height: 60px
  font-weight: bold

.custom-tooltip
  font-size: 14px
  white-space: nowrap
  padding: 2px 5px
  min-width: 20px
  text-align: center
  color: #fff
  border-radius: 5px
  border-color: #FF5D2E
  background-color: #FF5D2E
  box-sizing: content-box

.vue-slider-process
  background-color: #FF5D2E
  border-radius: 15px

.vue-slider-dot-handle
  width: 100%
  height: 100%
  background-color: #FF5D2E
  border: 2px solid rgba(218, 218, 218, 1)

.vue-slider-disabled
  opacity: 1
  cursor: default

.vue-slider-dot-handle-disabled
  cursor: default
  background-color: #FF5D2E
</style>
