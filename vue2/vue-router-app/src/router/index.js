import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView'
import LoginView from '@/views/LoginView'
import NotFound404 from '@/views/NotFound404'
import DogView from '@/views/DogView'


Vue.use(VueRouter)

const isLoggedIn = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    // 라우터 가드
    beforeEnter(to, from, next) {
      if (isLoggedIn) {
        console.log('이미 로그인')
        next({name: 'home'})
      } 
    }
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView,
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404,
  },
  {
    path: '*',
    redirect: '/404',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 전역 가드
// router.beforeEach((to, from, next) => {
//   const isLoggedIn = false

//   // const authPages = ['hello']
//   const allowAllPages = ['login']

//   // const isAuthrequired = authPages.includes(to.name)
//   const isAuthrequired = !allowAllPages.includes(to.name)

//   if (isAuthrequired && !isLoggedIn) {
//     next({name: 'login'})
//   } else {
//     next()
//   }
// })

export default router
