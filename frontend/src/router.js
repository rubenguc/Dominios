import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import Home from "./views/Home.vue"
import CRUD from "./components/CRUD.vue"
import Dashboard from "./components/Dashboard.vue"
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
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        isPublic: false
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        isPublic: false
      }
    },
    {
      path: '/CRUD',
      name: 'CRUD',
      component: CRUD,
      meta: {
        isPublic: false
      }
    }
  ]
})
