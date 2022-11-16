import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleView from '@/views/ArticleView'
import CreateView from '@/views/CreateView'
import DetailView from '@/views/DetailView'
import SignUpView from '@/views/SignUpView'
// import LogInView from '@/views/LogInView'
import UserView from '@/views/UserView'
import TestHome from '@/views/TestHome'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TestHome',
    component: TestHome
  },

  {
    path: '/community',
    name: 'ArticleView',
    component: ArticleView
  },
 
  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },

  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },

  // {
  //   path: '/login',
  //   name: 'LogInView',
  //   component: LogInView
  // },

  {
    path: '/user',
    name: 'UserView',
    component: UserView
  },

  {
    path: '/:id',
    name: 'DetailView',
    component: DetailView,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
