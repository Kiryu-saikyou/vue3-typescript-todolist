import { defineStore } from 'pinia';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Todo[],
    }),
    actions: {
        fetchTodos() {
            const savedTodos = localStorage.getItem('todos');
            if (savedTodos) {
                this.todos = JSON.parse(savedTodos);
            }
        },
        addTodo(title: string) {
            const newTodo = {
                id: Date.now(),
                title,
                completed: false,
            };
            this.todos.push(newTodo);
            this.saveTodos();
        },
        toggleTodo(id: number) {
            const todo = this.todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                this.saveTodos();
            }
        },
        deleteTodo(id: number) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveTodos();
        },
        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        }
    },
});    