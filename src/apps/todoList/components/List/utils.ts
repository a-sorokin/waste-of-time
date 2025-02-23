import { Todo } from '@/apps/todoList/types';

export const sortByDate = (a: Todo, b: Todo) => {
  return a.createdAt.localeCompare(b.createdAt);
};

export const sortByName = (a: Todo, b: Todo) => {
  return a.title.localeCompare(b.title);
};

// export const sortByPriority = (a: Todo, b: Todo) => {
//   return a.priority - b.priority;
// };
