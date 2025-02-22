import { deleteTodoHttp, getTodosHttp } from '@/apps/todoList/http/todoHttp';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { TodoId } from '@/apps/todoList/types';

export const deleteTodoHttpHandler = async (id: TodoId) => {
  const { setLoading, setTodos } = useTodoStore.getState();

  try {
    const { success } = await deleteTodoHttp(id);
    if (success) return;

    setLoading(true);

    const { todos } = await getTodosHttp();

    setTodos(todos);
    setLoading(false);
  } catch (error) {
    alert(error);
  }
};
