import { createRouter, createWebHistory} from 'vue-router';

import Home from './../views/Home.vue'
import Portfolio from './../views/Portfolio.vue'

const router = createRouter({
    history:  createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },

    ]
})
export default router;

