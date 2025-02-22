import { todoApi } from '@/apps/todoList/http/todoApi';

export const getTodosHttp = () => {
  return todoApi.getTodos();
};

export const createTodoHttp = (title: string) => {
  return todoApi.createTodo(title);
};

export const updateTodoHttp = (id: string, value?: string, completed?: boolean) => {
  return todoApi.updateTodo(id, { title: value, completed });
};
