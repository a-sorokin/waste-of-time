import { useAstStore } from '@ast/astStore';

export const setResult = (result: string) => {
  const state = useAstStore.getState();
  state.setResult(result);
};
