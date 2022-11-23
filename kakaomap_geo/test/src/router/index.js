import Vue from 'vue'
import VueRouter from 'vue-router'
import CurrentSite from '../views/CurrentSite.vue'
import KakaoMap from '@/views/KakaoMap'
import KakaoMap2 from '@/views/KakaoMap2'

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
  },
  {
    path: '/map2',
    name: 'map2',
    component: KakaoMap2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
