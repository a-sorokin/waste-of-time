import { create } from 'zustand';
import { createTodoHttp, getTodosHttp } from '@/apps/todoList/http/todoHttp';
import { Todos, TodosObj } from '@/apps/todoList/types';
import { convertTodosToObj } from '@/apps/todoList/utils/convertTodosToObj';

export type TodoStore = {
  todos: TodosObj;

  setTodos: (todos: Todos) => void;
  addTodo: (value: string) => void;
  // updateTodo: (id: string, value?: string, completed?: boolean) => void;
};

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: {},

  setTodos: (todos) => set(() => ({ todos: convertTodosToObj(todos) })),

  addTodo: async (value) => {
    set(({ todos }) => {
      const now = String(Date.now());
      const todo = { id: now, title: value, completed: false, createdAt: now, updatedAt: now };
      return { todos: { ...todos, [now]: todo } };
    });

    try {
      await createTodoHttp(value);
      const { todos } = await getTodosHttp();
      get().setTodos(todos);
    } catch (error) {
      alert(error);
    }
  },

  // updateTodo: async (id, value, completed) => {},
}));
