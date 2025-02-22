import styles from './Item.module.scss';
import { FC, memo, useCallback, useState } from 'react';
import clsx from 'clsx';
import { Checkbox } from '@/apps/todoList/basicComponents/Checkbox/Checkbox';
import { useGetTodoItem } from '@/apps/todoList/hooks/useGetTodoItem';
import { TodoId } from '@/apps/todoList/types';

type Props = {
  id: TodoId;
};

export const Item: FC<Props> = memo(({ id }) => {
  const todo = useGetTodoItem(id);

  const [checked, setChecked] = useState(false);

  const onChange = useCallback((checked: boolean) => {
    setChecked(checked);
  }, []);

  return (
    <div className={styles.item} onClick={() => onChange(!checked)}>
      <Checkbox checked={checked} onChange={onChange} />

      <span className={clsx({ [styles.checked]: checked })}>{todo.title}</span>
    </div>
  );
});
