<template>
    <div class="todo-filter">
        <button @click="filter = 'all'; changeFilter()">全部</button>
        <button @click="filter = 'active'; changeFilter()">未完成</button>
        <button @click="filter = 'completed'; changeFilter()">已完成</button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const filter = ref('all');
const emit = defineEmits(['change']);

const changeFilter = () => {
    emit('change', filter.value);
};
</script>

<style scoped>
.todo-filter {
    margin-top: 20px;
}

.todo-filter button {
    padding: 8px 16px;
    background-color: #f8f9fa;
    color: #212529;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
}

.todo-filter button:hover {
    background-color: #e2e6ea;
}
</style>