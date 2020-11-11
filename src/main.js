import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'
import VueScrollTo from 'vue-scrollto'
import Transitions from 'vue2-transitions'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'
import VueNativeSock from 'vue-native-websocket'

// CSS Entry
import '@/assets/css/main.css'
import 'vue-slider-component/theme/default.css'

Vue.config.productionTip = false

const HTTPClient = axios.create({ baseURL: process.env.VUE_APP_API_URL })

Vue.prototype.http = HTTPClient
store.http = HTTPClient

Vue.use(VueScrollTo)
Vue.use(Transitions)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(VueNativeSock, `ws://${process.env.VUE_APP_API_URL}/echo`)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
