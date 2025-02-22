import { create } from 'zustand';
import { createTodoHttp, getTodosHttp } from '@/apps/todoList/http/todoHttp';
import { Todos } from '@/apps/todoList/types';

export type TodoStore = {
  todos: Todos;

  setTodos: (todos: Todos) => void;
  addTodo: (value: string) => void;
  updateTodo: (id: string, value?: string, completed?: boolean) => void;
};

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  setTodos: (todos) => set({ todos }),

  addTodo: async (value) => {
    set(({ todos }) => {
      const now = String(Date.now());
      const todo = { id: now, title: value, completed: false, createdAt: now, updatedAt: now };
      return { todos: [...todos, todo] };
    });

    try {
      await createTodoHttp(value);
      const { todos } = await getTodosHttp();
      get().setTodos(todos);
    } catch (error) {
      alert(error);
    }
  },

  updateTodo: async (id, value, completed) => {
    set(({ todos }) => {
      const index = todos.findIndex((todo) => todo.id === id);
      if (index === -1) return { todos };

      const now = String(Date.now());
      const todo = {
        ...todos[index],
        title: value ?? todos[index].title,
        completed: completed ?? todos[index].completed,
        updatedAt: now,
      };
      return { todos: [...todos.slice(0, index), todo, ...todos.slice(index + 1)] };
    });

    try {
      await createTodoHttp(value);
      const { todos } = await getTodosHttp();
      get().setTodos(todos);
    } catch (error) {
      alert(error);
    }
  },
}));
