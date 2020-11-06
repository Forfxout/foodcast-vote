<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <div class="font-bold text-3xl my-20">
        This week's restaurant
      </div>
      <div class="flex px-48">
        <div class="flex flex-col">
          <div class="text-2xl font-bold -mt-4">
            {{ restaurantName }}
          </div>
          <div class="py-4">
            <div>
              {{ description }}
            </div>
            <div class="py-6">
              Today Bevri shows us NUMBER exclusive dishes you can vote for and get on Monday.
            </div>
            <div class="flex">
              <div class="px-4">
                <img src="../assets/icons/map.svg" alt="">
              </div>
              <div>
                {{ location }}
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
  props: ['restaurantName', 'description', 'aboutDishes', 'location', 'image']
}
</script>

<style scoped>

</style>
