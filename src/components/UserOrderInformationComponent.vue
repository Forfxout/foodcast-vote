<template>
  <div class="border-b m-16 flex flex flex-col">
    <div class="text-center">
      <div class="text-2xl">Order №{{ count }}</div>
      <div class="text-xl font-light">Order details:</div>
    </div>
    <div class="flex justify-center py-8">
      <div class="px-12">
        <div class="flex">
          <div class="flex justify-center items-center bg-orange w-20 text-white py-2">
            Name
          </div>
          <div class="flex justify-center items-center border-b-2 border-orange text-center w-64 text-xl">
            {{ userName }}
          </div>
        </div>
        <div class="flex mt-4">
          <div class="flex justify-center items-center bg-orange w-20 text-white py-2">
            Address
          </div>
          <div class="flex justify-center items-center border-b-2 border-orange text-center w-64 text-xl">
            {{ userAddress }}
          </div>
        </div>
      </div>
      <div class="px-12">
        <div class="flex">
          <div class="flex justify-center items-center bg-orange w-20 text-white py-2">
            Phone
          </div>
          <div
            class="flex justify-center items-center border-b-2 border-orange text-center w-64 text-xl text-orange">
            <a :href="`tel:${userPhone}`"> {{ userPhone }}</a>
          </div>
        </div>
        <div class="flex mt-4">
          <div class="flex justify-center items-center bg-orange w-20 text-white py-2">
            Email
          </div>
          <div
            class="flex justify-center items-center border-b-2 border-orange text-center w-64 text-xl text-orange">
            <a :href="`mailto:${userEmail}`"> {{ userEmail }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center py-12">
      <OrderDishComponent v-for="(dish, index) of dishes" :key="index"
                          class="w-1/5 px-8"
                          :dishId="dish.id"
                          :dishCount="dish.count"
                          @amountOfDish="amountOfDish"/>
    </div>
    <div class="flex justify-center">
      <div class="pt-4 pb-4 text-2xl mx-4">
        Total: {{ this.totalPrice }} $
      </div>
    </div>
    <div class="flex justify-center">
      <div class="pb-8 text-2xl">
        <div class="pretty p-image p-plain">
          <input type="checkbox" v-model="approvedStatus" @change="postApproved"/>
          <div class="state flex items-center">
            <img class="image" src="../assets/icons/tick.svg">
            <label>Approved</label>
          </div>
        </div>
      </div>
      <div class="pb-8 text-2xl">
        <div class="pretty p-image p-plain">
          <input type="checkbox" v-model="completedStatus" @change="postCompleted"/>
          <div class="state flex items-center">
            <img class="image" src="../assets/icons/tick.svg">
            <label>Completed</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDishComponent from '@/components/OrderDishComponent'

export default {
  components: {
    OrderDishComponent
  },
  props: ['orderId', 'userName', 'userEmail', 'userPhone', 'userAddress', 'dishes', 'count', 'orderApprovedStatus', 'orderCompletedStatus'],
  data () {
    return {
      totalPrice: 0,
      approvedStatus: this.orderApprovedStatus,
      completedStatus: this.orderCompletedStatus
    }
  },
  methods: {
    amountOfDish (value) {
      this.totalPrice += value
    },
    async postApproved () {
      const approvedData = {
        approved: this.approvedStatus,
        id: this.orderId
      }

      await this.http.post('/v1/orders/approve', approvedData, { headers: { Authorization: this.$cookies.get('adminKey') } })
    },
    async postCompleted () {
      const completedData = {
        completed: this.completedStatus,
        id: this.orderId
      }

      await this.http.post('/v1/orders/complete', completedData, { headers: { Authorization: this.$cookies.get('adminKey') } })
    }
  }
}
</script>

<style scoped>

</style>
