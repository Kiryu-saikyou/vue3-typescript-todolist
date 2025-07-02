// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import { useUserStore } from '@/stores/userStore';
import { useTodoStore } from '@/stores/todoStore'; // 使用@别名导入

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// 初始化用户状态
const userStore = useUserStore();
userStore.init();

// 如果用户已登录，初始化待办事项
if (userStore.isLoggedIn) {
    const todoStore = useTodoStore();
    todoStore.fetchTodos();
}

app.mount('#app');