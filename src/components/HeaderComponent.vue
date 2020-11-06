<template>
  <div class="main-div text-white">
    <div class="relative flex flex-col items-center z-10 p-16">
      <div class="p-12">
        <img width="194" height="68" src="../assets/images/food-logo.png" alt="">
      </div>
      <div class="flex flex-col items-center px-16" style="font-size: 28px">
        <div class="font-bold p-4">
          Every week we launch a game
        </div>
        <div class="text-center">
          when we choose six dishes that famous restaurants provide us exclusively. Whenever somebody places an order,
          the price drops in real-time. The more you order - the lower the price for all buyers (and for previous ones
          too)!
        </div>
      </div>
      <div>
        <CounterComponent/>
      </div>
      <button>Start playing</button>
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
  font-size: 17px
</style>
