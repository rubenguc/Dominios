import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CRUD from './components/CRUD.vue'
import Logout from './components/Logout.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isPublic: false
      }
    },
    {
      path: '/CRUD',
      name: 'CRUD',
      component: CRUD
    },
    {
      path: '/Logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        isPublic: true
      }
    }
  ]
})
