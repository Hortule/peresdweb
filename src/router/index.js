import Vue from 'vue'
import VueRouter from 'vue-router'
import HOME from '../views/HOME'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HOME',
        component: HOME
    },
    {
        path: '/motherboard',
        name: 'MOTHERBOARD',
        component: () => import('../views/MOTHERBOARD.vue')
    },
    {
        path: '/cpu',
        name: 'CPU',
        component: () => import('../views/CPU.vue')
    }
];


const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

export default router
