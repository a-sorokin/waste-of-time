import styles from './Result.module.scss';
import { useAstStore } from '@ast/astStore';

export const Result = () => {
  const result = useAstStore((state) => state.result);

  return <div className={styles.result}>{result || 'No result'}</div>;
};
