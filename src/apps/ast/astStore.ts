import { create } from 'zustand';
import { evaluate } from '@ast/logic/evaluators/evaluate';
import { Expression } from '@ast/logic/types';

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

    const parsedExpression: Expression = JSON.parse(expression);
    const localResult = evaluate(parsedExpression);

    console.log(`localResult`, localResult);

    get().setResult(JSON.stringify(localResult));
  },

  setResult: (result) => set({ result }),
}));
