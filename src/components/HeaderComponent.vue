<template>
  <div class="main-div flex items-center text-white">
    <div class="relative flex flex-col items-center z-10">
      <div class="p-12">
        <div class="-mt-24">
          <img width="194" height="68" src="../assets/images/food-logo.png" alt="">
        </div>
      </div>
      <div class="flex flex-col items-center px-6 -mt-6" style="font-size: 28px">
        <div class="text-center font-semibold">
          Every week we launch a game
        </div>
        <div class="text-center text-xl font-light">
          when we choose six dishes that famous restaurants provide us exclusively. Whenever somebody places an order,
          the price drops in real-time. The more you order - the lower the price for all buyers (and for previous ones
          too)!
        </div>
      </div>
      <div>
        <CounterComponent/>
      </div>
      <button class="tracking-wider text-xl focus:outline-none" v-scroll-to="'#chooseDishes'">Start playing
      </button>
    </div>
  </div>
</template>

<script>
import CounterComponent from '@/components/CounterComponent'

export default {
  components: {
    CounterComponent
  }
}
</script>

<style lang="sass" scoped>
.main-div
  background-image: url("../assets/images/frame-14.png")
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  height: 100vh

  &:after
    content: ''
    top: 0
    position: absolute
    width: 100%
    height: 100vh
    filter: opacity(0.6)
    background: linear-gradient(180deg, #000000 30.33%, rgba(0, 0, 0, 0) 153.92%)

button
  background: #FF5D2E
  border-radius: 100px
  width: 240px
  height: 60px
</style>
