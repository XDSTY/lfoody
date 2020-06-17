import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import index from '@/pages/index'
import cart from '@/pages/cart'
import me from '@/pages/me'
import register from '@/pages/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
