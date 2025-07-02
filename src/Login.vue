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
        router.push('/'); // 登录成功后跳转到首页(待办事项)
    } else {
        errorMessage.value = '用户名或密码错误';
    }
};
</script>

<style scoped>
.login-container {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
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
</style>