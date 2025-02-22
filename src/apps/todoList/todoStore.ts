import { create } from 'zustand';
import { createTodo, getTodos } from '@/apps/todoList/http/todoHttp';
import { Todos } from '@/apps/todoList/types';

export type TodoStore = {
  todos: Todos;

  setTodos: (todos: Todos) => void;
  addTodo: (value: string) => void;
};

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  setTodos: (todos) => set({ todos }),
  addTodo: (value) => {
    set(({ todos }) => {
      const now = String(Date.now());
      const todo = { id: now, title: value, completed: false, createdAt: now, updatedAt: now };
      return { todos: [...todos, todo] };
    });

    createTodo(value).then(() => {
      getTodos().then(({ todos }) => {
        get().setTodos(todos);
      });
    });
  },
}));
