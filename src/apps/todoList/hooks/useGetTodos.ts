import { useEffect } from 'react';
import { getTodos } from '@/apps/todoList/http/todoHttp';
import { useTodoStore } from '@/apps/todoList/todoStore';

export const useGetTodos = () => {
  const setTodos = useTodoStore((state) => state.setTodos);

  useEffect(() => {
    getTodos().then(({ todos }) => {
      setTodos(todos);
    });
  }, [setTodos]);
};
