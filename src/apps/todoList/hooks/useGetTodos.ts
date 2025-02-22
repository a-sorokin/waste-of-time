import { useEffect } from 'react';
import { getTodosHttp } from '@/apps/todoList/http/todoHttp';
import { useTodoStore } from '@/apps/todoList/todoStore';

export const useGetTodos = () => {
  const setTodos = useTodoStore((state) => state.setTodos);
  const setLoading = useTodoStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);

    getTodosHttp().then(({ todos }) => {
      setTodos(todos);
      setLoading(false);
    });
  }, [setLoading, setTodos]);
};
