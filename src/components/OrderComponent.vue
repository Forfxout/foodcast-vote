<template>
  <div class="flex flex-col pb-10 relative">
    <div class="absolute btn right-0 top-0 m-4 shadow-none rounded-full">
      <img src="../assets/icons/cancel-button.svg" @click="$emit('close')" />
    </div>
    <div class="flex justify-center text-4xl mt-8">Your order</div>
    <div class="flex flex-col justify-center px-10">
      <fade-transition group mode="out-in" class="mb-4">
        <SelectedDishComponent
          v-for="(dish, index) in getDishes"
          :key="index"
          :dishId="dish.dishId"
          :dishName="dish.dishName"
          :dishStock="dish.stock"
          :restaurantLocation="dish.restaurantLocation"
          :dishCost="dish.cost"
          :dishImage="dish.dishImage"
          @update:price="updateTotal"
          @remove="updateTotal"
        />
      </fade-transition>
      <div class="text-lg ml-auto mx-16 mb-12"><span class="font-light">Total: </span>{{ totalPrice }}$</div>
    </div>
    <div class="flex flex-col items-center w-full">
      <form @submit.prevent="onSubmit" class="w-full submit-form px-16">
        <div>
          <input
            type="text"
            placeholder="Your name"
            class="input-field"
            v-model.trim="username"
            :class="{ invalid: $v.username.$dirty && !$v.username.required }"
          />
          <div
            class="text-red-500 h-6 text-center text-sm"
            v-if="$v.username.$dirty && !$v.username.required"
          >
            Please enter your name
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Your email"
            class="input-field"
            v-model.trim="email"
            :class="{
              invalid:
                ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.email),
            }"
          />
          <div
            class="text-red-500 h-6 text-center text-sm"
            v-if="$v.email.$dirty && !$v.email.required"
          >
            Please enter your email
          </div>
          <div
            class="text-red-500 h-6 text-center text-sm"
            v-if="$v.email.$dirty && !$v.email.email"
          >
            Please enter a valid email
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Your phone"
            class="input-field"
            v-model="phoneNumber"
            v-mask="'(###) ###-####'"
            :class="{
              invalid:
                ($v.phoneNumber.$dirty && !$v.phoneNumber.required) ||
                ($v.phoneNumber.$dirty && !$v.phoneNumber.minLength),
            }"
          />
          <div
            class="text-red-500 h-6 text-center text-sm"
            v-if="$v.phoneNumber.$dirty && !$v.phoneNumber.required"
          >
            Please enter your phone number
          </div>
          <div
            class="text-red-500 h-6 text-center text-sm"
            v-else-if="$v.phoneNumber.$dirty && !$v.phoneNumber.minLength"
          >
            Please enter correct phone number
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Your address for delivery"
            class="input-field"
            v-model.trim="deliveryAddress"
            :class="{ invalid: $v.deliveryAddress.$dirty && !$v.deliveryAddress.required }"
          />
          <div
            class="text-red-500 h-6 text-center text-sm"
            v-if="$v.deliveryAddress.$dirty && !$v.deliveryAddress.required"
          >
            Please enter your delivery address
          </div>
        </div>
        <div class="flex justify-center items-center text-white text-2xl pt-2">
          <button
            class="bg-black text-white w-full py-3 rounded-full btn mt-2 font-medium"
            type="submit"
          >
            Checkout
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SelectedDishComponent from '@/components/SelectedDishComponent'
import { email, required, minLength } from 'vuelidate/lib/validators'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    SelectedDishComponent
  },
  data () {
    return {
      username: '',
      email: '',
      phoneNumber: '',
      deliveryAddress: '',
      dishes: [],
      totalPrice: 0
    }
  },
  validations: {
    username: { required },
    email: { email, required },
    phoneNumber: { required, minLength: minLength(14) },
    deliveryAddress: { required }
  },
  computed: {
    ...mapGetters('order', ['getDishes']),
    ...mapGetters('restaurant', ['getRestaurantWeek'])
  },
  methods: {
    ...mapMutations('restaurant', ['SET_DISHES']),
    ...mapMutations('order', ['SET_ORDER_DISHES']),
    updateTotal () {
      setTimeout(() => {
        const els = document.getElementsByClassName('dish-price-total')
        let result = 0
        for (var i = els.length; i--;) {
          result += els[i].innerHTML.slice(2) - 0
        }
        this.totalPrice = result
      }, 600)
    },
    async onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const userOrderData = {
        restaurantId: this.getRestaurantWeek.id,
        phone: this.phoneNumber,
        email: this.email,
        address: this.deliveryAddress,
        name: this.username,
        order: this.getDishes.map(dish => ({ id: dish.dishId, count: dish.count }))
      }
      const result = await this.http.post('/v1/orders', userOrderData)
      this.SET_DISHES(result.data)
      this.SET_ORDER_DISHES([])
      this.$swal(`Thank you for your order price is $${this.totalPrice}`)
    }
  }
}
</script>

<style lang="sass" scoped>
.input-field
  @apply rounded-full px-6 py-4 border-2 bg-white text-black w-full
  &::placeholder
    @apply text-black font-light
  &.invalid
    @apply border-red-500

  &:focus
    outline: none

.submit-form
  & > div
    @apply mb-4

</style>
