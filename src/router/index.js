import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/pages/login'
import Reg from '@/pages/reg'
import TIndex from '@/pages/tindex'
import AIndex from '@/pages/aindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/tindex',
      name: 'tindex',
      component: TIndex
    },
    {
      path: '/aindex',
      name: 'aindex',
      component: AIndex
    }
  ]
})
