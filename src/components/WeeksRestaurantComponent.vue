<template>
  <div>
    <div class="flex font-light flex-col justify-center items-center">
      <div class="text-3xl my-20 font-normal">
        This week's restaurant
      </div>
      <div class="flex px-48 font-light">
        <div class="flex flex-col">
          <div class="text-3xl font-medium -mt-4">
            {{ restaurantName }}
          </div>
          <div class="text-xl py-4">
            <div class="font-light">
              {{ description }}
            </div>
            <div class="text-xl py-6">
              Today Bevri shows us {{ dishCount }} exclusive dishes you can vote for and get on Monday.
            </div>
            <div class="flex">
              <div class="px-4">
                <img src="../assets/icons/map.svg" alt="">
              </div>
              <div class="text-xl">
                {{ location }} (<a style="color: #FF5D2E" target="_blank" :href="yelp">Yelp</a>)
              </div>
            </div>
          </div>
        </div>
        <div class="px-8"></div>
        <div class="py-10">
          <img :src="image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['restaurantName', 'description', 'aboutDishes', 'location', 'image', 'dishCount', 'yelp']
}
</script>

<style scoped>

</style>
