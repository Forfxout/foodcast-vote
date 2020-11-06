<template>
  <div class="picture-div flex justify-center text-white" @mouseover="hover = true" @mouseleave="hover = false">
    <div v-if="hover" class="relative flex flex-col justify-center items-center z-10 px-6 text-center block">
      <div class="text-3xl font-bold py-4">
        <!--        {{ dishName }}-->
        Pkhali
      </div>
      <div class="text-2xl">
        <!--        {{ dishDescription }}-->
        Cold vegetable-walnut pâté, is a perfect vegan appetizer. It can be served as a dip, a spread or on its own. At
        Bevri you can enjoy this Georgian speciality in two flavors - beet and spinach.
      </div>
    </div>
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
  background-size: contain
  height: 100%

  &:hover:after
    content: ''
    top: 0
    position: absolute
    width: 100%
    height: 100%
    filter: opacity(0.6)
    background: linear-gradient(180deg, #000000 30.33%, rgba(0, 0, 0, 0) 153.92%)
</style>
