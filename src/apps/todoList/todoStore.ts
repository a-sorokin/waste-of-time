import { create } from 'zustand';
import { UpdateTodoProps } from '@/apps/todoList/http/types';
import { Todos, TodosObj } from '@/apps/todoList/types';
import { addTodoHttpHandler } from '@/apps/todoList/utils/addTodoHttpHandler';
import { convertTodosToObj } from '@/apps/todoList/utils/convertTodosToObj';
import { deleteTodoHttpHandler } from '@/apps/todoList/utils/deleteTodoHttpHandler';
import { getMergedTodos } from '@/apps/todoList/utils/getMergedTodos';
import { getUpdatedTodos } from '@/apps/todoList/utils/getUpdatedTodos';
import { updateTodoHttpHandler } from '@/apps/todoList/utils/updateTodoHttpHandler';

export type TodoStore = {
  todos: TodosObj;

  setTodos: (todos: Todos | TodosObj, isObj?: boolean) => void;
  addTodo: (value: string) => void;
  updateTodo: (props: UpdateTodoProps) => void;
  deleteTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: {},

  setTodos: (todos, isObj) => {
    set(() => ({
      todos: isObj ? (todos as TodosObj) : convertTodosToObj(todos as Todos),
    }));
  },

  addTodo: async (value) => {
    set(({ todos }) => ({ todos: getMergedTodos(value, todos) }));
    addTodoHttpHandler(value);
  },

  updateTodo: async (props) => {
    set(({ todos }) => ({ todos: getUpdatedTodos(props, todos) }));
    updateTodoHttpHandler(props);
  },

  deleteTodo: (id) => {
    set(({ todos }) => {
      delete todos[id];
      return { todos: { ...todos } };
    });
    deleteTodoHttpHandler(id);
  },
}));
