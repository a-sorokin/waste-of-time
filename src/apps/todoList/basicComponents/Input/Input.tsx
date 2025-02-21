import styles from './Input.module.scss';
import { useCallback } from 'react';

export const Input = () => {
  const onChange = useCallback(() => {
    console.log(`hh`);
  }, []);

  return <input type="text" className={styles.input} autoFocus onChange={onChange} />;
};
