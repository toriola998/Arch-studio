import { createRouter, createWebHistory} from 'vue-router';

import Home from './../views/Home.vue'
import Portfolio from './../views/Portfolio.vue'
import About from './../views/About.vue'

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

    {
        path: '/about-us',
        name: 'about',
        component: About
    },

    ]
})
export default router;

