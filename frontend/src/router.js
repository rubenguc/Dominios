import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import Home from "./views/Home.vue"
import CRUD from "./components/CRUD.vue"
import Dashboard from "./components/Dashboard.vue"
import store from '@/store/';
import LoginApi from '@/services/login';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isPublic: true
      },
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        isPublic: false
      },
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        isPublic: false
      },
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/CRUD',
      name: 'CRUD',
      component: CRUD,
      meta: {
        isPublic: false
      },
      beforeEnter: ifAuthenticated,
    }
  ]
})

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/dashoard')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}