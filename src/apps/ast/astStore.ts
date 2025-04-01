import { create } from 'zustand';
import { LOADING_MESSAGE } from '@ast/constants';
import { evaluateAndSetResult } from '@ast/utils';

type Store = {
  expression: string;
  result: string;
  editMode: boolean;

  setExpression: (expression: string) => void;
  setResult: (result: string) => void;
  setEditMode: (editMode: boolean) => void;
};

export const useAstStore = create<Store>((set, get) => ({
  expression: '',
  result: '',
  editMode: false,

  setExpression: (expression) => {
    set({ expression });
    get().setResult(LOADING_MESSAGE);
    evaluateAndSetResult(expression);
  },

  setResult: (result) => set({ result }),

  setEditMode: (editMode) => {
    if (editMode) {
      set({ editMode, expression: '', result: LOADING_MESSAGE });
      return;
    }
    set({ editMode });
  },
}));
