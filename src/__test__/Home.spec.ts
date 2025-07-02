// src/__test__/Home.spec.ts
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import Home from '../Home.vue';

describe('Home.vue', () => {
    let wrapper: VueWrapper;

    beforeEach(() => {
        wrapper = mount(Home);
    });

    // 测试添加新项目
    describe('Adding a new todo', () => {
        it('adds a new todo when input is not empty and add button is clicked', async () => {
            const input = wrapper.find('input');
            const addButton = wrapper.find('button');
            const newTodoText = 'Buy milk';

            await input.setValue(newTodoText);
            await addButton.trigger('click');

            const todoItems = wrapper.findAll('.todo-item');
            expect(todoItems.length).toBe(1);
            expect(todoItems[0].text()).toContain(newTodoText);
        });

        it('does not add a new todo when input is empty', async () => {
            const addButton = wrapper.find('button');
            await addButton.trigger('click');

            const todoItems = wrapper.findAll('.todo-item');
            expect(todoItems.length).toBe(0);
        });
    });

    // 测试删除项目
    describe('Deleting a todo', () => {
        it('deletes a todo when delete button is clicked', async () => {
            const input = wrapper.find('input');
            const addButton = wrapper.find('button');
            const newTodoText = 'Buy milk';

            await input.setValue(newTodoText);
            await addButton.trigger('click');

            const deleteButton = wrapper.find('.delete-btn');
            await deleteButton.trigger('click');

            const todoItems = wrapper.findAll('.todo-item');
            expect(todoItems.length).toBe(0);
        });

        it('deletes the correct todo when multiple todos exist', async () => {
            const input = wrapper.find('input');
            const addButton = wrapper.find('button');

            await input.setValue('Todo 1');
            await addButton.trigger('click');

            await input.setValue('Todo 2');
            await addButton.trigger('click');

            await input.setValue('Todo 3');
            await addButton.trigger('click');

            const todoItems = wrapper.findAll('.todo-item');
            expect(todoItems.length).toBe(3);

            const deleteButton = todoItems[1].find('.delete-btn');
            await deleteButton.trigger('click');

            const remainingItems = wrapper.findAll('.todo-item');
            expect(remainingItems.length).toBe(2);
            expect(remainingItems[0].text()).toContain('Todo 1');
            expect(remainingItems[1].text()).toContain('Todo 3');
        });
    });

    // 测试修改项目
    describe('Editing a todo', () => {
        it('edits an existing todo', async () => {
            const input = wrapper.find('input');
            const addButton = wrapper.find('button');
            const initialText = 'Buy milk';
            const updatedText = 'Buy soy milk';

            // 添加一个项目
            await input.setValue(initialText);
            await addButton.trigger('click');

            // 使用更精确的选择器找到任务文本元素
            const todoText = wrapper.find('[data-testid="todo-text"]');

            // 双击进入编辑模式
            await todoText.trigger('dblclick');

            // 等待多个DOM更新周期
            await wrapper.vm.$nextTick();
            await wrapper.vm.$nextTick();

            // 验证编辑模式已激活
            expect(wrapper.vm.editingIndex).toBe(0);

            // 查找编辑输入框
            const editInput = wrapper.find('[data-testid="edit-input"]');

            // 确保找到了编辑输入框
            expect(editInput.exists()).toBe(true);

            // 修改内容并提交
            await editInput.setValue(updatedText);
            await editInput.trigger('keyup.enter');

            // 验证内容已更新
            expect(todoText.text()).toContain(updatedText);
            expect(todoText.text()).not.toContain(initialText);
        });

        it('cancels editing without saving changes', async () => {
            const input = wrapper.find('input');
            const addButton = wrapper.find('button');
            const initialText = 'Original text';
            const updatedText = 'Updated text';

            // 添加一个项目
            await input.setValue(initialText);
            await addButton.trigger('click');

            // 使用更精确的选择器找到任务文本元素
            const todoText = wrapper.find('[data-testid="todo-text"]');

            // 双击进入编辑模式
            await todoText.trigger('dblclick');

            // 等待多个DOM更新周期
            await wrapper.vm.$nextTick();
            await wrapper.vm.$nextTick();

            // 验证编辑模式已激活
            expect(wrapper.vm.editingIndex).toBe(0);

            // 查找编辑输入框
            const editInput = wrapper.find('[data-testid="edit-input"]');

            // 确保找到了编辑输入框
            expect(editInput.exists()).toBe(true);

            // 修改内容但取消编辑
            await editInput.setValue(updatedText);
            await editInput.trigger('keyup.esc');

            // 验证内容未更新
            expect(todoText.text()).toContain(initialText);
            expect(todoText.text()).not.toContain(updatedText);
        });
    });

    // 测试全部删除
    describe('Deleting all todos', () => {
        it('deletes all todos when delete all button is clicked', async () => {
            const input = wrapper.find('input');
            const addButton = wrapper.find('button');
            const deleteAllButton = wrapper.find('[data-testid="delete-all-btn"]');

            // 添加多个项目
            await input.setValue('Todo 1');
            await addButton.trigger('click');

            await input.setValue('Todo 2');
            await addButton.trigger('click');

            await input.setValue('Todo 3');
            await addButton.trigger('click');

            // 验证初始有3个项目
            let todoItems = wrapper.findAll('.todo-item');
            expect(todoItems.length).toBe(3);

            // 确保找到了全部删除按钮
            expect(deleteAllButton.exists()).toBe(true);

            // Mock确认对话框返回true
            vi.spyOn(window, 'confirm').mockImplementation(() => true);

            // 点击全部删除按钮
            await deleteAllButton.trigger('click');

            // 验证列表为空
            todoItems = wrapper.findAll('.todo-item');
            expect(todoItems.length).toBe(0);

            // 恢复mock
            vi.restoreAllMocks();
        });

        it('shows empty state when all todos are deleted', async () => {
            const deleteAllButton = wrapper.find('[data-testid="delete-all-btn"]');

            // 确保找到了全部删除按钮
            expect(deleteAllButton.exists()).toBe(true);

            // Mock确认对话框返回true
            vi.spyOn(window, 'confirm').mockImplementation(() => true);

            // 点击全部删除按钮
            await deleteAllButton.trigger('click');

            // 验证空状态提示显示
            const emptyState = wrapper.find('.empty-state');
            expect(emptyState.exists()).toBe(true);

            // 恢复mock
            vi.restoreAllMocks();
        });
    });
});