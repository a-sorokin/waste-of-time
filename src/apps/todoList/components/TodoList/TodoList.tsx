import styles from './TodoList.module.scss';
import '@/apps/todoList/todoStyles.module.scss';
import { Add } from '@/apps/todoList/components/Add/Add';
import { List } from '@/apps/todoList/components/List/List';
import { useGetTodos } from '@/apps/todoList/hooks/useGetTodos';

export const TodoList = () => {
  useGetTodos();

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todo}>
        <Add />
        <List />
      </div>
    </div>
  );
};
