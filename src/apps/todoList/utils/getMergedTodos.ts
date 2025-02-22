import { TodosObj } from '@/apps/todoList/types';

export const getMergedTodos = (value: string, todos: TodosObj): TodosObj => {
  const now = String(Date.now());
  const todo = { id: now, title: value, completed: false, createdAt: now, updatedAt: now };
  return { ...todos, [now]: todo };
};
