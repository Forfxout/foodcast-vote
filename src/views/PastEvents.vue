<template>
  <div>
    <div class="flex justify-center text-3xl mt-8">
      Past Events
    </div>
    <div class="flex flex-wrap justify-center mb-12 xl:px-48">
      <PastRestaurantComponent v-for="(postRestaurant, index) in getRestaurantsPast" :key="index"
                               class="p-8 pb-0 w-full sm:w-1/2 xl:w-1/3"
                               :restaurantId="postRestaurant.id"
                               :restaurantName="postRestaurant.name"
                               :restaurantDescription="postRestaurant.description"
                               :endTime="postRestaurant.ends"
                               :yelp="postRestaurant.yelp"
                               :restaurantLocation="postRestaurant.location"
                               :restaurantImage="postRestaurant.image"
                               :checkAdminAccess="adminAccess"
      />
    </div>
    <div class="admin-button w-full text-center font-light text-lg xl:block hidden mb-2">
      <a v-if="!adminAccess" target="_blank" class="text-orange cursor-pointer" @click="openInputKeyView">Enter admin
        details</a>
    </div>
  </div>
</template>

<script>
import PastRestaurantComponent from '@/components/PastRestaurantComponent'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    PastRestaurantComponent
  },
  data () {
    return {
      adminAccess: false
    }
  },
  computed: {
    ...mapGetters('restaurant', ['getRestaurantsPast'])
  },
  methods: {
    ...mapActions('restaurant', ['fetchEventsPassed']),
    async openInputKeyView () {
      this.$swal({
        title: 'Enter admin key',
        content: 'input'
      }).then(value => {
        this.$cookies.set('adminKey', value)
      }).then(() => this.checkAdminAccess())
    },
    async checkAdminAccess () {
      try {
        await this.http.get('/v1/check/auth', { headers: { Authorization: this.$cookies.get('adminKey') } })
        this.adminAccess = true
      } catch (e) {
      }
    }
  },
  async mounted () {
    await this.fetchEventsPassed()
    await this.checkAdminAccess()
  }
}
</script>

<style lang="sass" scoped>
.admin-button
  position: fixed
  bottom: 0
</style>
