import { updateTodoHttp } from '@/apps/todoList/http/todoHttp';
import { UpdateTodoProps } from '@/apps/todoList/http/types';
import { useTodoStore } from '@/apps/todoList/todoStore';

export const updateTodoHttpHandler = async (props: UpdateTodoProps) => {
  try {
    const { todos, setTodos } = useTodoStore.getState();
    const updatedTodo = await updateTodoHttp(todos[props.id]);
    const updatedTodos = { ...todos, [updatedTodo.id]: updatedTodo };
    setTodos(updatedTodos, true);
  } catch (error) {
    alert(error);
  }
};
