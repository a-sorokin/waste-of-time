import styles from './TodoList.module.scss';
import '@/apps/todoList/todoStyles.module.scss';
import { Add } from '@/apps/todoList/components/Add/Add';
import { List } from '@/apps/todoList/components/List/List';

export const TodoList = () => {
  return (
    <div className={styles.todoContainer}>
      <div className={styles.todo}>
        <Add />
        <List />
      </div>
    </div>
  );
};
