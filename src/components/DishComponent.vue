<template>
  <div>
    <div class="flex flex-col">
      <div>
        <DishPictureComponent :dishName="dishName" :dishDescription="description" :dishImage="dishImage"/>
      </div>
      <div class="flex flex-col p-2">
        <div class="text-2xl font-bold pb-2"></div>
        <div class="flex flex-col h-24">
          <div class="text-2xl">
            {{ dishName }}
          </div>
          <div class="flex justify-between py-2">
            <div class="text-sm lg:text-lg">
              by {{ restaurantLocation }}
            </div>
            <div class="flex">
              <div class="px-1">
                <a :href="instagram" target="_blank">
                  <img src="../assets/icons/social/instagram.svg" alt=""/>
                </a>
              </div>
              <div class="px-1">
                <a :href="facebook" target="_blank">
                  <img src="../assets/icons/social/facebook.svg" alt=""/>
                </a>
              </div>
              <div class="px-1">
                <a :href="linkedin" target="_blank">
                  <img src="../assets/icons/social/linkedin.svg" alt=""/>
                </a>
              </div>
              <div class="px-1">
                <a :href="twitter" target="_blank">
                  <img src="../assets/icons/social/twitter.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-8">
          <div class="flex justify-between">
            <div>
              <span> $ {{ min.toFixed(2) }} </span>
            </div>
            <div>
              <span> $ {{ max.toFixed(2) }} </span>
            </div>
          </div>
          <vue-slider
            v-model="cost"
            :min="min"
            :max="max"
            :tooltip="'always'"
            :disabled="true"
            tooltipPlacement="bottom"
          >
            <template v-slot:tooltip>
              <div class="custom-tooltip">$ {{ cost.toFixed(2) }}</div>
            </template>
          </vue-slider>
        </div>
        <div class="flex font-light justify-between items-center pt-10 pb-4">
          <div
            class="border-2 border-black flex flex-col items-center justify-center px-4 py-1 rounded"
          >
            <div class="text-xs">time left</div>
            <div>
              <DishCounterComponent/>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="flex flex-col font-light px-2 leading-4">
              <div>{{ left }} of {{ stock }}</div>
              <div>plates left</div>
            </div>
            <div>
              <img src="../assets/icons/plate-card.svg" class="w-12 ml-2" alt=""/>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center text-white text-2xl pt-2">
          <button :disabled="left === 0" class="btn bg-black rounded-full w-64 py-3" :class="{ 'bg-orange': active }"
                  @click="selectedDish">
            {{ active ? 'Added to Cart' : 'Buy' }}
          </button>
        </div>
        <div class="flex justify-center font-light items-center pt-2 text-sm">
          * 1 vote = ${{ step }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DishPictureComponent from '@/components/DishPictureComponent'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import DishCounterComponent from '../components/DishCounterComponent.vue'
import { mapGetters } from 'vuex'

export default {
  props: ['dishId', 'dishName', 'restaurantLocation', 'description', 'active', 'dishImage', 'left', 'step', 'max', 'stock', 'min', 'cost', 'instagram', 'facebook', 'linkedin', 'twitter'],
  components: {
    DishPictureComponent,
    VueSlider,
    DishCounterComponent
  },
  data () {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapGetters('restaurant', ['getRestaurantWeekDishes'])
  },
  methods: {
    selectedDish () {
      this.$emit('selectedDish', {
        dishId: this.dishId,
        dishName: this.dishName,
        restaurantLocation: this.restaurantLocation,
        dishImage: this.dishImage,
        stock: this.stock,
        left: this.left,
        cost: this.cost,
        count: 0,
        total: 0,
        triggerModal: true
      })
    }
  }
}
</script>

<style lang="sass">
button
  &:disabled
    cursor: not-allowed
    opacity: 0.75

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
