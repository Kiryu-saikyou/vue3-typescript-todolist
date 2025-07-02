import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../Home.vue';
import About from '../About.vue';

describe('App.vue', () => {
    it('renders navigation links', async () => {
        // 创建测试用的路由实例
        const router = createRouter({
            history: createWebHashHistory(),
            routes: [
                { path: '/', component: Home },
                { path: '/about', component: About }
            ]
        });

        // 将路由挂载到应用中
        router.push('/'); // 导航到首页
        await router.isReady(); // 等待路由初始化完成

        // 挂载App组件，并传入路由
        const wrapper = mount(App, {
            global: {
                plugins: [router]
            }
        });

        // 等待DOM更新
        await wrapper.vm.$nextTick();

        // 使用更精确的选择器查找导航链接
        const homeLink = wrapper.find('[data-testid="nav-home"]');
        const aboutLink = wrapper.find('[data-testid="nav-about"]');

        // 验证链接是否存在并显示正确的文本
        expect(homeLink.exists()).toBe(true);
        expect(homeLink.text()).toBe('首页');
        expect(aboutLink.exists()).toBe(true);
        expect(aboutLink.text()).toBe('个人简介');
    });
});