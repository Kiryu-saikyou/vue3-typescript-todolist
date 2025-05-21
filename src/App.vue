<template>
  <div id="app">
    <h1>ToDo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="添加新任务">
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="(todo, index) in filteredTodos" :key="index">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ completed: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">删除</button>
      </li>
    </ul>
    <p v-if="todos.length === 0">没有任务，请添加新任务。</p>
    <p>剩余任务: {{ remainingTodos }}</p>
    <div>
      <button @click="filter = 'all'">全部</button>
      <button @click="filter = 'active'">未完成</button>
      <button @click="filter = 'completed'">已完成</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';

// 定义任务类型
interface Todo {
  text: string;
  done: boolean;
}

// 任务列表
const todos = ref<Todo[]>([]);
// 新任务输入框的值
const newTodo = ref('');

// 添加任务
const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value, done: false });
    newTodo.value = '';
  }
};

// 删除任务
const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};

// 计算属性：过滤出未完成的任务
const remainingTodos = computed(() => {
  return todos.value.filter(todo => !todo.done).length;
});

// 计算属性：根据筛选条件过滤任务
const filter = ref('all');
const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'all':
      return todos.value;
    case 'active':
      return todos.value.filter(todo => !todo.done);
    case 'completed':
      return todos.value.filter(todo => todo.done);
    default:
      return todos.value;
  }
});

// 生命周期钩子：组件挂载后执行
onMounted(() => {
  console.log('组件已挂载');
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #999;
}
</style>