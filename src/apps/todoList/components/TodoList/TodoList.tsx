import styles from './TodoList.module.scss';
import '@/apps/todoList/styles/todoStyles.module.scss';
import { Add } from '@/apps/todoList/components/Add/Add';
import { ErrorBoundary } from '@/apps/todoList/components/ErrorBoundary/ErrorBoundary';
import { Filters } from '@/apps/todoList/components/Filters/Filters';
import { List } from '@/apps/todoList/components/List/List';
import { Sorting } from '@/apps/todoList/components/Sorting/Sorting';
import { Spinner } from '@/apps/todoList/components/Spinner/Spinner';
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
          <Spinner />

          <div className={styles.extraControls}>
            <Filters />
            <Sorting />
          </div>

          <div className={styles.main}>
            <Add />
            <List />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};
