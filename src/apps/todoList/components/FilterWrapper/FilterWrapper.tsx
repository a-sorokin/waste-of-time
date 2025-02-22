import { FC, ReactNode } from 'react';
import { useGetTodoItem } from '@/apps/todoList/hooks/useGetTodoItem';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { FILTERS, TodoId } from '@/apps/todoList/types';

type Props = {
  children: ReactNode;
  id: TodoId;
};

export const FilterWrapper: FC<Props> = ({ children, id }) => {
  const filter = useTodoStore((state) => state.filter);
  const { completed } = useGetTodoItem(id);

  if (filter === FILTERS.Active && !completed) return <>{children}</>;
  if (filter === FILTERS.Completed && completed) return <>{children}</>;
  if (filter === FILTERS.All) return <>{children}</>;
  return null;
};
