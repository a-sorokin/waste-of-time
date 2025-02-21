import styles from './Add.module.scss';
import { useCallback } from 'react';
import { Button } from '@/apps/todoList/basicComponents/Button/Button';
import { Input } from '@/apps/todoList/basicComponents/Input/Input';

export const Add = () => {
  const onClick = useCallback(() => {
    console.log(`hi`);
  }, []);

  return (
    <div className={styles.add}>
      <div className={styles.title}>Add todo</div>
      <Input />
      <Button onClick={onClick}>Add Todo</Button>
    </div>
  );
};
