export type TodoId = string;

export type Todo = {
  id: TodoId;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  // priority: PRIORITY;
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
  // byPriority = 'By priority',
}

export enum PRIORITY {
  Low = 1,
  Medium = 2,
  High = 3,
}

export enum THEMES {
  light = 'Light',
  dark = 'Dark',
}
