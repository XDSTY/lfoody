import Vue from 'vue'
import Router from 'vue-router'
import { getStore, setStore } from '../service/storage'

import login from '@/pages/login'
import index from '@/pages/index'
import cart from '@/pages/cart'
import me from '@/pages/me'
import register from '@/pages/register'
import detail from '@/pages/detail'
import buy from '@/pages/buy'
import pay from '@/pages/pay'
import sw from '@/pages/sw'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: {
        needLogin: true
      }
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
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/pay/:orderId',
      name: 'pay',
      component: pay
    },
    {
      path: '/sw',
      name: 'sw',
      component: sw
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 获取用户登录成功后储存的登录标志
  const accessToken = getStore('accessToken')
  // 如果是已经登陆状态
  if (accessToken !== null) {
    next()
  } else {
    // 判断是否需要登陆
    if (to.meta.needLogin === true) {
      router.push('/login')
    } else {
      next()
    }
  }
})

export default router;