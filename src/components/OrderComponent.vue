<template>
  <div class="flex flex-col pb-10">
    <div class="flex justify-end p-4">
      <img src="../assets/icons/cancel-button.svg" alt="">
    </div>
    <div class="flex justify-center text-3xl font-bold">
      Your order
    </div>
    <div class="flex flex-col justify-center">
      <SelectedDishComponent v-for="dish in getDishes" :key="dish._id"
                             :dishId="dish._id"
                             :dishName="dish.dishName"
                             :restaurantLocation="dish.restaurantLocation"
                             :dishCost="dish.cost"
                             :dishImage="dish.dishImage">
      </SelectedDishComponent>
    </div>
    <div class="flex justify-end">
      Total
    </div>
    <div class="input-div flex flex-col items-center">
      <form @submit.prevent="onSubmit">
        <div>
          <input type="text"
                 placeholder="Your name"
                 class="input-field"
                 v-model.trim="username"
                 :class="{invalid: ($v.username.$dirty && !$v.username.required)}">
          <div
            class="text-red-500 text-center text-sm"
            v-if="$v.username.$dirty && !$v.username.required">
            Please enter your name
          </div>
        </div>
        <div>
          <input type="text"
                 placeholder="Your email"
                 class="input-field"
                 v-model.trim="email"
                 :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
          <div
            class="text-red-500 text-center text-sm"
            v-if="$v.email.$dirty && !$v.email.required">
            Please enter your email
          </div>
          <div
            class="text-red-500 text-center text-sm"
            v-if="$v.email.$dirty && !$v.email.email">
            Please enter a valid email
          </div>
        </div>
        <div>
          <input type="text"
                 placeholder="Your phone"
                 class="input-field"
                 v-model="phoneNumber"
                 v-mask="'(###) ###-####'"
                 :class="{invalid: ($v.phoneNumber.$dirty && !$v.phoneNumber.required) || ($v.phoneNumber.$dirty && !$v.phoneNumber.minLength)}">
          <div
            class="text-red-500 text-center text-sm"
            v-if="$v.phoneNumber.$dirty && !$v.phoneNumber.required">
            Please enter your phone number
          </div>
          <div
            class="text-red-500 text-center text-sm"
            v-else-if="$v.phoneNumber.$dirty && !$v.phoneNumber.minLength">
            Please enter correct phone number
          </div>
        </div>
        <div>
          <input type="text"
                 placeholder="Your address for delivery"
                 class="input-field"
                 v-model.trim="deliveryAddress"
                 :class="{invalid: ($v.deliveryAddress.$dirty && !$v.username.deliveryAddress)}">
          <div
            class="text-red-500 text-center text-sm"
            v-if="$v.deliveryAddress.$dirty && !$v.deliveryAddress.required">
            Please enter your delivery address
          </div>
        </div>
        <div class="flex justify-center items-center text-white text-2xl pt-2">
          <button class="btn-buy mt-2 focus:outline-none font-medium" type="submit">Checkout</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SelectedDishComponent from '@/components/SelectedDishComponent'
import { email, required, minLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
  components: {
    SelectedDishComponent
  },
  data () {
    return {
      username: '',
      email: '',
      phoneNumber: '',
      deliveryAddress: ''
    }
  },
  validations: {
    username: { required },
    email: { email, required },
    phoneNumber: { required, minLength: minLength(14) },
    deliveryAddress: { required }
  },
  computed: {
    ...mapGetters('order', ['getDishes'])
  },
  methods: {
    onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const userOrderData = {
        username: this.username,
        email: this.email,
        phoneNumber: this.phoneNumber,
        deliveryAddress: this.deliveryAddress
      }
      console.log(userOrderData)

      this.username = ''
      this.email = ''
      this.phoneNumber = ''
      this.deliveryAddress = ''
    }
  }
}
</script>

<style lang="sass" scoped>
.input-field
  border: 1px solid #DADADA
  width: 250px
  @apply rounded-full px-6 py-4 m-2

  &.invalid
    border: 1px solid #f56565

  &:focus
    outline: none

.btn-buy
  background: #000000
  border-radius: 100px
  width: 250px
  height: 60px
</style>
