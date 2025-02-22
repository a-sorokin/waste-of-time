import { useEffect } from 'react';
import { getTodosHttp } from '@/apps/todoList/http/todoHttp';
import { useTodoStore } from '@/apps/todoList/todoStore';

export const useGetTodos = () => {
  const setTodos = useTodoStore((state) => state.setTodos);

  useEffect(() => {
    getTodosHttp().then(({ todos }) => {
      setTodos(todos);
    });
  }, [setTodos]);
};
