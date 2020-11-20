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
import VueSwal from 'vue-swal'
import dotenv from 'dotenv'
import cookie from 'vue-cookies'

// CSS Entry
import '@/assets/css/main.css'
import 'vue-slider-component/theme/default.css'

Vue.config.productionTip = false
dotenv.config()

const HTTPClient = axios.create({ baseURL: process.env.VUE_APP_API_URL })

Vue.prototype.http = HTTPClient
store.http = HTTPClient

Vue.use(VueScrollTo)
Vue.use(Transitions)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(VueNativeSock, process.env.VUE_APP_WSS_URL)
Vue.use(VueSwal)
Vue.use(cookie)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
