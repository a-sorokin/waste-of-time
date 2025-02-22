import { todoApi } from '@/apps/todoList/http/todoApi';
import { GetTodosResponse } from '@/apps/todoList/http/types';
import { Todo } from '@/apps/todoList/types';

export const getTodosHttp = (): Promise<GetTodosResponse> => {
  return todoApi.getTodos();
};

export const createTodoHttp = (title: string) => {
  return todoApi.createTodo(title);
};

export const updateTodoHttp = ({ id, title, completed }: Todo) => {
  return todoApi.updateTodo(id, { title, completed });
};
