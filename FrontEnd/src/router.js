import Vue from 'vue'
import Router from 'vue-router'
import MyCv from './views/MyCv.vue'
import RegisterUser from './views/RegisterUser.vue'
import LoginUser from './views/LoginUser.vue'
import Player from './views/Player.vue'
import Home from './views/Home.vue'
import Shared from './views/Shared.vue'
import Upload from './views/Upload.vue'
import Stat from './views/Stat.vue'



Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/player',
            name: 'player',
            component: Player,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginUser
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterUser
        },
        {
            path: '/mycv',
            name: 'mycv',
            component: MyCv,
            meta: { requiresAuth: true }
        },
        {
            path: '/stat',
            name: 'stat',
            component: Stat,
            meta: { requiresAuth: true }
        },
        {
            path: '/upload',
            name: 'upload',
            component: Upload,
            meta: { requiresAuth: true }
        },
        {
            path: '/shared',
            name: 'shared',
            component: Shared,
            meta: { requiresAuth: true }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/')
    }
    next()
})

export default router
