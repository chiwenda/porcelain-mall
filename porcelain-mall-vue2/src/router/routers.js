import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const LoginComponents =resolve => require(['@/views/login'],resolve)

export const routerMaps = [
  {
    path: '/',
    meta: {
      title: '登录',
      noCache: true,
    },
    component: LoginComponents,
  },
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: routerMaps
  })
