<template>
  <div id="app">
    <h1>ToDo List</h1>
    <TodoInput @add="addTodo" />
    <TodoList :todos="todos" :filter="filter" @remove="removeTodo" />
    <TodoFilter @change="changeFilter" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFilter from './components/TodoFilter.vue';

// 任务列表
const todos = ref<{ text: string; done: boolean }[]>([]);
// 筛选条件
const filter = ref('all');

// 添加任务
const addTodo = (text: string) => {
  todos.value.push({ text, done: false });
};

// 删除任务
const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};

// 改变筛选条件
const changeFilter = (newFilter: string) => {
  filter.value = newFilter;
};
</script>

<style scoped>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>