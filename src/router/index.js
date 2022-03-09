import { createRouter, createWebHistory} from 'vue-router';

import Home from './../views/Home.vue'
import Portfolio from './../views/Portfolio.vue'
import About from './../views/About.vue'
import Contact from './../views/Contact.vue'

const router = createRouter({
    history:  createWebHistory(),
    scrollBehavior() {
        // always scroll to top
        return { 
            top: 0,
            //behavior: 'smooth', 
        }
    },
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

    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },

    ]
})
export default router;

