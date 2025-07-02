<template>
  <div class="todo-container">
    <h1>待办事项</h1>

    <div class="todo-form">
      <input v-model="newTodoTitle" placeholder="添加新任务" @keyup.enter="addTodo">
      <button @click="addTodo">添加</button>
    </div>

    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)">
        <span>{{ todo.title }}</span>
        <button @click="deleteTodo(todo.id)">删除</button>
      </li>
    </ul>

    <div v-if="todos.length === 0" class="empty-state">
      暂无待办事项，添加一个吧！
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTodoStore } from '@/stores/todoStore';

const todoStore = useTodoStore();
const newTodoTitle = ref('');

// 获取待办事项列表
const todos = computed(() => todoStore.todos);

// 添加新任务
const addTodo = () => {
  if (newTodoTitle.value.trim()) {
    todoStore.addTodo(newTodoTitle.value);
    newTodoTitle.value = '';
  }
};

// 切换任务状态
const toggleTodo = (id: number) => {
  todoStore.toggleTodo(id);
};

// 删除任务
const deleteTodo = (id: number) => {
  if (confirm('确定要删除这个任务吗？')) {
    todoStore.deleteTodo(id);
  }
};
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.todo-form {
  display: flex;
  margin-bottom: 20px;
}

.todo-form input {
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.todo-form button {
  padding: 8px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.todo-list li.completed span {
  text-decoration: line-through;
  color: #888;
}

.todo-list li input {
  margin-right: 10px;
}

.todo-list li button {
  margin-left: auto;
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.empty-state {
  text-align: center;
  color: #888;
  padding: 20px;
}
</style>