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

export enum FILTERS {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

export enum SORTING {
  byDate = 'By date',
  byName = 'By name',
}
