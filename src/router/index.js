import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Hello from '@/components/Hello'
import Login from '@/pages/login'
import Reg from '@/pages/reg'
import TIndex from '@/pages/tindex'
import AIndex from '@/pages/aindex'

Vue.use(Router)

const router = new Router({
    routes: [{
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
            path: '/reg',
            name: 'reg',
            component: Reg
        },
        {
            path: '/tindex',
            name: 'tindex',
            component: TIndex,
            meta: {
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            },
        },
        {
            path: '/aindex',
            name: 'aindex',
            component: AIndex,
            meta: {
                requireAuth: true, 
            },
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (store.state.token) { // 通过vuex state获取当前的token是否存在
            next();
        } else {
            next({
                path: '/login',
            })
        }
    } else {
        next();
    }
})


export default router