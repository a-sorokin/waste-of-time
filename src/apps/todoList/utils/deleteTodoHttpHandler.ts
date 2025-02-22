import { deleteTodoHttp, getTodosHttp } from '@/apps/todoList/http/todoHttp';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { TodoId } from '@/apps/todoList/types';

export const deleteTodoHttpHandler = async (id: TodoId) => {
  try {
    const { success } = await deleteTodoHttp(id);
    if (success) return;
    getTodosHttp().then(({ todos }) => useTodoStore.getState().setTodos(todos));
  } catch (error) {
    alert(error);
  }
};
