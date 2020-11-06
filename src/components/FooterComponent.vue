<template>
  <div class="flex flex-col justify-center items-center bg-black text-white py-12">
    <div>
      <img src="../assets/icons/heart.svg" alt="">
    </div>
    <div class="font-bold text-2xl py-2">
      With love from CA
    </div>
    <div class="flex justify-center">
      <div class="text-center">
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
