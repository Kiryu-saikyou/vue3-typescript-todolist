import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import App from '../App.vue';
import Home from '../Home.vue';
import About from '../About.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        
        path: '/todolist',
        name: 'ToDoList',
        component: App
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;