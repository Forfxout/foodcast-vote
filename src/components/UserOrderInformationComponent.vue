<template>
  <div>
    <div>
      {{userName}}
    </div>
    <div>
      {{userEmail}}
    </div>
    <div>
      {{userPhone}}
    </div>
    <div>
      {{userAddress}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['userName', 'userEmail', 'userPhone', 'userAddress', 'dishes']
}
</script>

<style scoped>

</style>
