export type TodoId = string;

export type Todo = {
  id: TodoId;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Todos = Todo[];

export type TodosObj = { [key: TodoId]: Todo };

export type UpdateTodoProps = { id: string; value?: string; completed?: boolean };
