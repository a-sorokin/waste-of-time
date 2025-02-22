import { createTodoHttp, getTodosHttp } from '@/apps/todoList/http/todoHttp';
import { useTodoStore } from '@/apps/todoList/todoStore';

export const addTodoHttpHandler = async (value: string) => {
  const { setLoading, setTodos } = useTodoStore.getState();
  setLoading(true);

  try {
    await createTodoHttp(value);
    const { todos } = await getTodosHttp();
    setTodos(todos);
    setLoading(false);
  } catch (error) {
    alert(error);
  }
};
