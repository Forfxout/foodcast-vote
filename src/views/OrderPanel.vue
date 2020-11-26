<template>
  <div>
    <div>
      <UserOrderInformationComponent v-for="(order, index) in restaurantOrders" :key="index"
                                     :orderId="order._id"
                                     :userName="order.name"
                                     :userEmail="order.email"
                                     :userPhone="order.phone"
                                     :userAddress="order.address"
                                     :dishes="order.order"
                                     :orderApprovedStatus="order.approved"
                                     :orderCompletedStatus="order.completed"
                                     :count="index + 1"/>
    </div>
  </div>
</template>

<script>
import UserOrderInformationComponent from '@/components/UserOrderInformationComponent'

export default {
  components: {
    UserOrderInformationComponent
  },
  data () {
    return {
      restaurantOrders: []
    }
  },
  methods: {
    async checkAdminAccess () {
      try {
        await this.http.get('/v1/check/auth', { headers: { Authorization: this.$cookies.get('adminKey') } })
      } catch (e) {
        await this.$router.push({ path: '/' })
      }
    },
    async getRestaurantOrders () {
      const restaurantId = this.$route.params.id
      let result
      try {
        result = await this.http.get(`/v1/orders?id=${restaurantId}`, { headers: { Authorization: this.$cookies.get('adminKey') } })
      } catch (e) {
      }
      this.restaurantOrders = result.data
    }
  },
  async mounted () {
    await this.checkAdminAccess()
    await this.getRestaurantOrders()
  }
}
</script>

<style scoped>

</style>
