import { updateTodoHttp } from '@/apps/todoList/http/todoHttp';
import { UpdateTodoProps } from '@/apps/todoList/http/types';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { TodosObj } from '@/apps/todoList/types';

export const updateTodoHttpHandler = async (props: UpdateTodoProps) => {
  const { setLoading, setTodos, todos } = useTodoStore.getState();
  setLoading(true);

  try {
    const updatedTodo = await updateTodoHttp(todos[props.id]);
    const updatedTodos = { ...todos, [updatedTodo.id]: updatedTodo } as TodosObj;
    setTodos(updatedTodos, true);
    setLoading(false);
  } catch (error) {
    alert(error);
  }
};
