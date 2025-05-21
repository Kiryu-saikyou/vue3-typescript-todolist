<template>
    <li>
        <input type="checkbox" v-model="todo.done">
        <span :class="{ completed: todo.done }">{{ todo.text }}</span>
        <button @click="remove">删除</button>
    </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    todo: { text: string; done: boolean };
    index: number;
}>();
const emit = defineEmits(['remove']);

const remove = () => {
    emit('remove', props.index);
};
</script>

<style scoped>
li {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

li input[type="checkbox"] {
    margin-right: 10px;
}

li span {
    flex-grow: 1;
}

li button {
    padding: 4px 8px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
}

li button:hover {
    background-color: #c82333;
}

.completed {
    text-decoration: line-through;
    color: #999;
}
</style>
