import styles from './List.module.scss';
import { Item } from '@/apps/todoList/components/Item/Item';
import { useTodoStore } from '@/apps/todoList/todoStore';

export const List = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className={styles.list}>
      {Object.values(todos).map(({ id }) => (
        <Item key={`todoItem-${id}`} id={id} />
      ))}
    </div>
  );
};
