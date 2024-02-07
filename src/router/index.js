import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Root',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/Home',
            name: 'HomePage',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/About',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/Settings',
            name: 'Settings',
            component: () => import('../views/Settings.vue')
        },
        {
            path: '/Toolkit',
            name: 'Toolkit',
            component: () => import('../views/Toolkit.vue')
        },
        {
            path: '/Counter-page',
            name: 'CounterPage',
            component: () => import('../components/Toolkit/counterpage.vue')

        }
    ]
})

export default router
