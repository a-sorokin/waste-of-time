import { useTodoStore } from '@/apps/todoList/todoStore';
import { TodoId } from '@/apps/todoList/types';

export const useGetTodoItem = (id: TodoId) => {
  return useTodoStore((state) => state.todos[id]);
};
