import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/past-events',
    name: 'PastEvents',
    component: () => import('@/views/PastEvents')
  },
  {
    path: '/orders/:id',
    name: 'Orders',
    component: () => import('@/views/OrderPanel')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
