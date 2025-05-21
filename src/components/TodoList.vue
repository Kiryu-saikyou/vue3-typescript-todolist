<template>
    <ul>
        <TodoItem v-for="(todo, index) in filteredTodos" :key="index" :todo="todo" :index="index"
            @remove="removeTodo" />
    </ul>
    <p v-if="todos.length === 0">没有任务，请添加新任务。</p>
    <p>剩余任务: {{ remainingTodos }}</p>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import TodoItem from './TodoItem.vue';

const props = defineProps<{
    todos: { text: string; done: boolean }[];
    filter: string;
}>();
const emit = defineEmits(['remove']);

const remainingTodos = computed(() => {
    return props.todos.filter(todo => !todo.done).length;
});

const filteredTodos = computed(() => {
    switch (props.filter) {
        case 'all':
            return props.todos;
        case 'active':
            return props.todos.filter(todo => !todo.done);
        case 'completed':
            return props.todos.filter(todo => todo.done);
        default:
            return props.todos;
    }
});

const removeTodo = (index: number) => {
    emit('remove', index);
};
</script>

<style scoped>
ul {
    padding: 0;
}
</style>