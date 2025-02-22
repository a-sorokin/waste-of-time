import { create } from 'zustand';
import { createTodoHttp, getTodosHttp, updateTodoHttp } from '@/apps/todoList/http/todoHttp';
import { UpdateTodoProps } from '@/apps/todoList/http/types';
import { Todos, TodosObj } from '@/apps/todoList/types';
import { convertTodosToObj } from '@/apps/todoList/utils/convertTodosToObj';

export type TodoStore = {
  todos: TodosObj;

  setTodos: (todos: Todos) => void;
  addTodo: (value: string) => void;
  updateTodo: (props: UpdateTodoProps) => void;
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

  updateTodo: async ({ id, value, completed }) => {
    set(({ todos }) => {
      const todo = { ...todos[id] };
      todo.title = value ?? todo.title;
      todo.completed = completed ?? todo.completed;
      return { todos: { ...todos, [id]: todo } };
    });

    try {
      const todo = get().todos[id];
      const updatedTodo = await updateTodoHttp(todo);
      set(({ todos }) => ({ todos: { ...todos, [id]: updatedTodo } }));
    } catch (error) {
      alert(error);
    }
  },
}));
