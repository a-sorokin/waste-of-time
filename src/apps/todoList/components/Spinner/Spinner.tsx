import styles from './Spinner.module.scss';
import { useTodoStore } from '@/apps/todoList/todoStore';

export const Spinner = () => {
  const loading = useTodoStore((state) => state.loading);

  if (!loading) return null;
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};
