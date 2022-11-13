import Vue from 'vue'
import VueRouter from 'vue-router'
import CurrentSite from '../views/CurrentSite.vue'
import KakaoMap from '@/views/KakaoMap'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'site',
    component: CurrentSite
  },
  {
    path: '/map',
    name: 'map',
    component: KakaoMap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
