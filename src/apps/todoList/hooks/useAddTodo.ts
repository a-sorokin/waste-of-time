import { createTodo } from '@/apps/todoList/http/todoHttp';

export const useAddTodo = (todoText: string) => {
  createTodo(todoText);
};
