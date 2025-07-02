import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../Home.vue';
import About from '../About.vue';
import Login from '../Login.vue';
import ImagePage from '../ImagePage.vue'; // 导入新组件
import { useUserStore } from '../stores/userStore';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/image-page',
        name: 'ImagePage',
        component: ImagePage, // 添加新路由
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (to.meta.requiresAuth && !userStore.isLoggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;    