<template>
    <div class="login-container">
        <h1>用户登录</h1>
        <div class="form-group">
            <label for="username">用户名:</label>
            <input type="text" id="username" v-model="username" placeholder="请输入用户名" />
        </div>
        <div class="form-group">
            <label for="password">密码:</label>
            <input type="password" id="password" v-model="password" placeholder="请输入密码" />
        </div>
        <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
        <button @click="handleLogin">登录</button>
        
        <!-- 简化的账号信息展示 -->
        <div class="account-info">
            <p>用户名: <code>admin</code> | 密码: <code>123456</code></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const userStore = useUserStore();
const router = useRouter();

const handleLogin = () => {
    const loginSuccess = userStore.login(username.value, password.value);

    if (loginSuccess) {
        router.push('/');
    } else {
        errorMessage.value = '用户名或密码错误';
    }
};
</script>

<style scoped>
.login-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: none;
    background-color: transparent;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.error-message {
    color: #f44336;
    margin: 10px 0;
    text-align: center;
}

/* 账号信息样式 */
.account-info {
    margin-top: 20px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    text-align: center;
}

.account-info p {
    margin: 0;
    color: #555;
}

.account-info code {
    background-color: #eee;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: Consolas, monospace;
}
</style>