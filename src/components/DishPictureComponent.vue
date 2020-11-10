<template>
  <div class="flex justify-center text-white relative" @mouseover="hover = true"
       @mouseleave="hover = false">
    <div class="picture-div relative"></div>
    <fade-transition mode="out-in">
      <div v-if="hover" class="absolute z-10 w-full">
        <div class="absolute top-0 shadow-bg px-6 py-6 flex flex-col justify-center items-center text-center">
          <div class="text-2xl">
            <!--        {{ dishName }}-->
            Pkhali
          </div>
          <div class="text-xl font-light">
            <!--        {{ dishDescription }}-->
            Cold vegetable-walnut pâté, is a perfect vegan appetizer. It can be served as a dip, a spread or on its own.
            At
            Bevri you can enjoy this Georgian speciality in two flavors - beet and spinach.
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
  props: ['dishName', 'dishDescription']
}
</script>

<style lang="sass" scoped>
.picture-div
  background-image: url("../assets/images/food-picture.png")
  background-repeat: no-repeat
  background-size: cover
  height: 30vh
  width: 100%

.shadow-bg
  background: rgba(0, 0, 0, 0.6)
  height: 30vh
</style>
