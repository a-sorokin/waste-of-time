import styles from './Delete.module.scss';
import { FC, memo } from 'react';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { TodoId } from '@/apps/todoList/types';

type Props = {
  id: TodoId;
};

export const Delete: FC<Props> = memo(({ id }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <span
      className={styles.delete}
      title="Delete item"
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(id);
      }}
    >
      ❌
    </span>
  );
});
