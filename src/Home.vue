<template>
    <div id="app">
      <h1>Todo List</h1>
      <div class="todo-input">
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="输入任务内容..." />
        <button @click="addTodo">添加</button>
      </div>
  
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item" :class="{ completed: todo.completed }">
          <label>
            <input type="checkbox" v-model="todo.completed" />
            <span>{{ todo.text }}</span>
          </label>
          <button class="delete-btn" @click="removeTodo(index)">删除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // 定义 Todo 类型
  interface Todo {
    text: string;
    completed: boolean;
  }
  
  const newTodo = ref<string>('');
  const todos = ref<Todo[]>([]);
  
  // 添加任务
  const addTodo = () => {
    const trimmed = newTodo.value.trim();
    if (trimmed !== '') {
      todos.value.push({
        text: trimmed,
        completed: false
      });
      newTodo.value = '';
    }
  };
  
  // 删除任务
  const removeTodo = (index: number) => {
    todos.value.splice(index, 1);
  };
  </script>
  
  <style scoped>
  #app {
    max-width: 500px;
    margin: 2rem auto;
    padding: 1.5rem;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .todo-input {
    display: flex;
    gap: 10px;
    margin-bottom: 1.5rem;
  }
  
  .todo-input input {
    flex: 1;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .todo-input button {
    padding: 8px 16px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .todo-list {
    list-style: none;
    padding: 0;
  }
  
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 8px;
    background-color: #fff;
    border-left: 5px solid #42b983;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }
  
  .todo-item:hover {
    transform: scale(1.01);
  }
  
  .todo-item.completed span {
    text-decoration: line-through;
    color: #888;
  }
  
  .delete-btn {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>