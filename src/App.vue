<template>
  <div class="container">
    <nav class="navbar" v-if="userStore.isLoggedIn">
      <router-link to="/" data-testid="nav-home">首页</router-link>
      <router-link to="/about" data-testid="nav-about">个人简介</router-link>
      <div class="user-info">
        <span>{{ userStore.username }}，欢迎您！</span>
        <button @click="logout">退出登录</button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from './stores/userStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.logout();
  // 退出登录后导航到登录页面
  router.push('/login');
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.navbar a {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info span {
  margin-right: 10px;
}

.user-info button {
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>