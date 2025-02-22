import styles from './Item.module.scss';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Checkbox } from '@/apps/todoList/basicComponents/Checkbox/Checkbox';
import { Delete } from '@/apps/todoList/components/Delete/Delete';
import { useGetTodoItem } from '@/apps/todoList/hooks/useGetTodoItem';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { TodoId } from '@/apps/todoList/types';

type Props = {
  id: TodoId;
};

export const Item: FC<Props> = memo(({ id }) => {
  const todo = useGetTodoItem(id);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [checked, setChecked] = useState(todo.completed);
  const [hovered, setHovered] = useState(false);

  const onChange = useCallback((checked: boolean) => setChecked(checked), []);
  const onClick = useCallback(() => updateTodo({ id, completed: !checked }), [checked, id, updateTodo]);
  const onHover = useCallback(() => setHovered(true), []);
  const onLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    setChecked(todo.completed);
  }, [todo.completed]);

  return (
    <div className={styles.item} onClick={onClick} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className={styles.mainContent}>
        <Checkbox checked={checked} onChange={onChange} />

        <div className={clsx(styles.itemText, { [styles.checked]: checked })} title={todo.title}>
          {todo.title}
        </div>
      </div>

      {hovered ? (
        <div className={styles.buttons}>
          <Delete id={id} />
        </div>
      ) : null}
    </div>
  );
});
