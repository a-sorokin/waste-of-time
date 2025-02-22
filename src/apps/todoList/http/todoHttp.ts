import { todoApi } from '@/apps/todoList/http/todoApi';

export const getTodosHttp = () => {
  return todoApi.getTodos();
};

export const createTodoHttp = (title: string) => {
  return todoApi.createTodo(title);
};
