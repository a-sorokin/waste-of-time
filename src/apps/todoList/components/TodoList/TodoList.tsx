import styles from './TodoList.module.scss';
import '@/apps/todoList/todoStyles.module.scss';
import { Add } from '@/apps/todoList/components/Add/Add';
import { ErrorBoundary } from '@/apps/todoList/components/ErrorBoundary/ErrorBoundary';
import { List } from '@/apps/todoList/components/List/List';
import { useGetTodos } from '@/apps/todoList/hooks/useGetTodos';

const Fallback = () => (
  <div className={styles.todoContainer}>
    <div className={styles.todo}>Please reload the app</div>
  </div>
);

export const TodoList = () => {
  useGetTodos();

  return (
    <ErrorBoundary fallback={<Fallback />}>
      <div className={styles.todoContainer}>
        <div className={styles.todo}>
          <Add />
          <List />
        </div>
      </div>
    </ErrorBoundary>
  );
};
