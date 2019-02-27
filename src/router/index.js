import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/pages/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Hello
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
