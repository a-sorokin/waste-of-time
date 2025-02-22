import { createTodoHttp, getTodosHttp } from '@/apps/todoList/http/todoHttp';
import { useTodoStore } from '@/apps/todoList/todoStore';

export const addTodoHttpHandler = async (value: string) => {
  try {
    await createTodoHttp(value);
    const { todos } = await getTodosHttp();
    useTodoStore.getState().setTodos(todos);
  } catch (error) {
    alert(error);
  }
};
