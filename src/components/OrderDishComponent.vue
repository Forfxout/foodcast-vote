<template>
  <div class="flex flex-col">
    <div>
      <img class="w-full" :src="dishInformation.image" alt="">
    </div>
    <div class="flex justify-between py-4">
      <div class="text-xl w-4/5">
        {{ dishInformation.name }}
      </div>
      <div class="text-xl">
        x {{ dishCount }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dishId', 'dishCount'],
  data () {
    return {
      dishInformation: []
    }
  },
  methods: {
    async getRestaurantDishes () {
      let result
      try {
        result = await this.http.get(`/v1/dishes/${this.dishId}`)
      } catch (e) {
      }
      this.dishInformation = result.data
    },
    async amountOfDish () {
      this.$emit('amountOfDish', this.dishInformation.cost * this.dishCount)
    }
  },
  async mounted () {
    await this.getRestaurantDishes()
    await this.amountOfDish()
  }
}
</script>

<style lang="sass" scoped>
img
  height: 20vh
</style>
