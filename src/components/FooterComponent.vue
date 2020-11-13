<template>
  <div class="flex flex-col justify-center items-center bg-black text-white py-6 xl:py-12">
    <div>
      <img src="../assets/icons/heart.svg" alt="">
    </div>
    <div class="font-bold text-lg py-2 lg:text-2xl">
      With love from CA
    </div>
    <div class="flex justify-center">
      <div class="text-sm font-medium text-center lg:text-xl">
        {{ location }}<br>
        Phone: {{ phone }} <br>
        E-mail: {{ email }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['location', 'phone', 'email']
}
</script>

<style scoped>
</style>
