import { create } from 'zustand';

type Store = {
  expression: string;

  setExpression: (expression: string) => void;
};

export const useAstStore = create<Store>((set) => ({
  expression: '',

  setExpression: (expression) => set({ expression }),
}));
