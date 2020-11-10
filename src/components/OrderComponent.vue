<template>
  <div class="flex flex-col">
    <div class="flex justify-end p-4">
      <img src="../assets/icons/cancel-button.svg" alt="">
    </div>
    <div class="flex justify-center text-3xl font-bold">
      Your order
    </div>
    <div class="input-div flex flex-col items-center">
      <div>
        <ValidationObserver v-slot="{handleSubmit}">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider name="username" rules="required|alpha_spaces" v-slot="{errors}">
              <div>
                <input type="text" placeholder="Your name" v-model="username" class="input-field">
                <div class="text-red-500 flex justify-center items-center text-sm">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
            <ValidationProvider name="email" rules="required|email" v-slot="{errors}">
              <div>
                <input type="text" placeholder="Your email" v-model="email" class="input-field">
                <div class="text-red-500 text-center text-sm">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
            <ValidationProvider name="phone number" rules="required|alpha" v-slot="{errors}">
              <div>
                <input type="text" class="input-field" v-mask="'(###) ###-####'" placeholder="Your phone"
                       v-model="phoneNumber">
                <div class="text-red-500 text-center text-sm">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
            <ValidationProvider name="username" rules="required" v-slot="{errors}">
              <div>
                <input type="text" placeholder="Your address for delivery" v-model="deliveryAddress"
                       class="input-field">
                <div class="text-red-500 text-center text-sm">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
          </form>
        </ValidationObserver>
      </div>
      <div class="flex justify-center items-center text-white text-2xl pt-2">
        <button class="btn-buy mt-2" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      phoneNumber: '',
      deliveryAddress: ''
    }
  },
  methods: {
    onSubmit () {
    }
  }
}
</script>

<style lang="sass" scoped>
.input-field
  border: 1px solid #DADADA
  width: 250px

  @apply rounded-full px-6 py-4 m-2

  &:focus
    outline: none

.btn-buy
  background: #000000
  border-radius: 100px
  width: 250px
  height: 60px
  font-weight: bold
</style>
