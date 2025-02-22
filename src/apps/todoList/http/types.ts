import { TodoId, Todos } from '@/apps/todoList/types';

export type GetTodosResponse = {
  todos: Todos;
  total: number;
};

export type UpdateTodoProps = { id: TodoId; value?: string; completed?: boolean };
