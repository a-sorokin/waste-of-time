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
  const onHover = useCallback(() => setHovered(true), []);
  const onLeave = useCallback(() => setHovered(false), []);

  const onClick = useCallback(() => {
    updateTodo({ id, completed: !checked });
  }, [checked, id, updateTodo]);

  useEffect(() => {
    setChecked(todo.completed);
  }, [todo.completed]);

  return (
    <div className={styles.item} onClick={onClick} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className={styles.mainContent}>
        <Checkbox checked={checked} onChange={onChange} />

        <span className={clsx({ [styles.checked]: checked })}>{todo.title}</span>
      </div>

      {hovered ? (
        <div className={styles.buttons}>
          <Delete id={id} />
        </div>
      ) : null}
    </div>
  );
});
