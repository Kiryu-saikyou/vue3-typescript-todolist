import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import TodoItem from '../components/TodoItem.vue';

describe('TodoItem.vue', () => {
    let wrapper: VueWrapper; // 显式指定 wrapper 的类型
    const todo = { text: 'Test Todo', done: false };
    const index = 0;

    beforeEach(() => {
        wrapper = mount(TodoItem, {
            props: {
                todo,
                index
            }
        });
    });

    it('renders todo text, checkbox and delete button', () => {
        const checkbox = wrapper.find('input[type="checkbox"]');
        const todoText = wrapper.find('span');
        const deleteButton = wrapper.find('button');

        expect(checkbox.exists()).toBe(true);
        expect(todoText.exists()).toBe(true);
        expect(todoText.text()).toBe(todo.text);
        expect(deleteButton.exists()).toBe(true);
        expect(deleteButton.text()).toBe('删除');
    });

    // 其他测试用例...
});