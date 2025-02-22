import { Todos } from '@/apps/todoList/types';

export type GetTodosResponse = {
  todos: Todos;
  total: number;
};

export type UpdateTodoProps = { id: string; value?: string; completed?: boolean };
