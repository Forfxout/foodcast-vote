<template>
  <div class="font-futura">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    ...mapMutations('restaurant', ['SET_DISHES'])
  },
  mounted () {
    this.$options.sockets.onmessage = (event) => {
      this.SET_DISHES(JSON.parse(event.data))
    }
  }
}
</script>
