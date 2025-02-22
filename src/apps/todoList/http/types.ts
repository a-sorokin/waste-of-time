import { Todos } from '@/apps/todoList/types';

export type GetTodosResponse = {
  todos: Todos;
  total: number;
};
