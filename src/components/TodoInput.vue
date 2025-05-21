<template>
    <div class="todo-input">
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="添加新任务">
        <button @click="addTodo">添加</button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const newTodo = ref('');
const emit = defineEmits(['add']);

const addTodo = () => {
    if (newTodo.value.trim()) {
        emit('add', newTodo.value);
        newTodo.value = '';
    }
};
</script>

<style scoped>
.todo-input {
    margin-bottom: 20px;
}

.todo-input input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
}

.todo-input button {
    padding: 8px 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.todo-input button:hover {
    background-color: #0056b3;
}
</style>