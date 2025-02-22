import { mockApi } from './mockData';

export const todoApi = {
  async getTodos(params = {}) {
    try {
      return await mockApi.getTodos(params);
    } catch (error) {
      throw new Error('Failed to fetch todos');
    }
  },

  async createTodo(title: string) {
    try {
      return await mockApi.createTodo(title);
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error('Failed to create todo');
    }
  },

  async updateTodo(id: string, updates: Partial<{ title: string; completed: boolean }>) {
    try {
      return await mockApi.updateTodo(id, updates);
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error('Failed to update todo');
    }
  },

  async deleteTodo(id: string) {
    try {
      return await mockApi.deleteTodo(id);
    } catch (error) {
      throw new Error('Failed to delete todo');
    }
  },

  async batchUpdate(ids: string[], action: 'complete' | 'delete') {
    try {
      return await mockApi.batchUpdateTodos(ids, action);
    } catch (error) {
      throw new Error('Failed to perform batch update');
    }
  },
};
