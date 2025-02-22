import { Todo } from '@/apps/todoList/types';

export const sortByDate = (a: Todo, b: Todo) => a.createdAt.localeCompare(b.createdAt);

export const sortByName = (a: Todo, b: Todo) => a.title.localeCompare(b.title);
