import { create } from 'zustand';
import { evaluateAndSetResult } from '@ast/utils';

type Store = {
  expression: string;
  result: string;

  setExpression: (expression: string) => void;
  setResult: (result: string) => void;
};

export const useAstStore = create<Store>((set, get) => ({
  expression: '',
  result: '',

  setExpression: (expression) => {
    set({ expression });
    get().setResult('Loading...');
    evaluateAndSetResult(expression);
  },

  setResult: (result) => {
    set({ result });
  },
}));
