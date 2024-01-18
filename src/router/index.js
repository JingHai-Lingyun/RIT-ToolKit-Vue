import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
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
        }
        // {
        //     path: '/test',
        //     name: 'Test',
        //     component: Example
        // }
    ]
})

export default router
