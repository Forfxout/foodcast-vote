<template>
  <div class="relative mr-32">
    <img :src="require('../assets/icons/question-right.svg')" alt="" width="100%">
    <div class="flex flex-col absolute top-0 p-8">
      <div class="text-2xl font-bold">
        {{ title }}
      </div>
      <div></div>
      <div class="text-xl">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description']
}
</script>

<style scoped>
</style>
