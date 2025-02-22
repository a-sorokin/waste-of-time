import { UpdateTodoProps } from '@/apps/todoList/http/types';
import { TodosObj } from '@/apps/todoList/types';

export const getUpdatedTodos = (props: UpdateTodoProps, todos: TodosObj): TodosObj => {
  const { id, value, completed } = props;
  const todo = { ...todos[id] };
  todo.title = value ?? todo.title;
  todo.completed = completed ?? todo.completed;
  return { ...todos, [id]: todo };
};
