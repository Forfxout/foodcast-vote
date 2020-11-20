<template>
  <div class="relative main-div">
    <img :src="require('../assets/icons/question-left.svg')" alt="" width="100%">
    <div class="flex flex-col absolute top-0 p-8">
      <div class="text-2xl font-bold">
        {{ title }}
      </div>
      <div></div>
      <div class="text-xl font-medium">
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

<style lang="sass" scoped>
@media screen and (min-width: 1441px)
  .main-div
    @apply ml-32
</style>
