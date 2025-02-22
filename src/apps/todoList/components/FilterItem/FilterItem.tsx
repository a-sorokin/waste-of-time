import styles from './FilterItem.module.scss';
import { FC, memo, useCallback } from 'react';
import clsx from 'clsx';
import { Button } from '@/apps/todoList/basicComponents/Button/Button';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { FILTERS } from '@/apps/todoList/types';

type Props = {
  filter: FILTERS;
};

export const FilterItem: FC<Props> = memo(({ filter }) => {
  const setFilter = useTodoStore((state) => state.setFilter);
  const filterFromStore = useTodoStore((state) => state.filter);

  const onClick = useCallback(() => {
    setFilter(filter);
  }, [filter, setFilter]);

  return (
    <Button
      className={clsx(styles.filterItem, {
        [styles.selected]: filterFromStore === filter,
      })}
      onClick={onClick}
    >
      {filter}
    </Button>
  );
});
