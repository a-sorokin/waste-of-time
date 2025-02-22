import { Todo, Todos, TodosObj } from '@/apps/todoList/types';

export const convertTodosToObj = (todos: Todos) => {
  return todos.reduce((acc: TodosObj, todo: Todo) => {
    acc[todo.id] = todo;
    return acc;
  }, {});
};
