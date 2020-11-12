import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PastEvents from '@/views/PastEvents'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/past-events',
    name: 'PastEvents',
    component: PastEvents
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
