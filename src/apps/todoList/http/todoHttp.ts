import { todoApi } from '@/apps/todoList/http/todoApi';

export const getTodos = () => {
  return todoApi.getTodos();
};

export const createTodo = (title: string) => {
  return todoApi.createTodo(title);
};
