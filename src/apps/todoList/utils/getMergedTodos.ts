import { PRIORITY, TodosObj } from '@/apps/todoList/types';

export const getMergedTodos = (value: string, todos: TodosObj): TodosObj => {
  const now = new Date().toISOString();

  const todo = {
    id: now,
    title: value,
    completed: false,
    createdAt: now,
    updatedAt: now,
    priority: PRIORITY.Low,
  };

  return { ...todos, [now]: todo };
};
