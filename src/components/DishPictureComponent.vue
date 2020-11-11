<template>
  <div class="flex justify-center text-white relative" :style="'background-image: url(' + dishImage + ')'" @mouseover="hover = true"
       @mouseleave="hover = false">
    <div class="picture-div relative"></div>
    <fade-transition mode="out-in">
      <div v-if="hover" class="absolute z-10 w-full">
        <div class="absolute top-0 shadow-bg px-6 py-6 flex flex-col justify-center items-center text-center">
          <div class="text-2xl">
            {{ dishName }}
          </div>
          <div class="text-xl font-light">
            {{ dishDescription }}
          </div>
        </div>
      </div>
    </fade-transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hover: false
    }
  },
  props: ['dishName', 'dishDescription', 'dishImage']
}
</script>

<style lang="sass" scoped>
.picture-div
  background-repeat: no-repeat
  background-size: cover
  height: 30vh
  width: 100%

.shadow-bg
  background: rgba(0, 0, 0, 0.6)
  height: 30vh
  width: 100%
</style>
