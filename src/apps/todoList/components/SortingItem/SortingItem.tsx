import styles from './SortingItem.module.scss';
import { FC, memo, useCallback } from 'react';
import clsx from 'clsx';
import { Button } from '@/apps/todoList/basicComponents/Button/Button';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { SORTING } from '@/apps/todoList/types';

type Props = {
  sorting: SORTING;
};

export const SortingItem: FC<Props> = memo(({ sorting }) => {
  const setSorting = useTodoStore((state) => state.setSorting);
  const sortingFromStore = useTodoStore((state) => state.sorting);

  const onClick = useCallback(() => {
    setSorting(sorting);
  }, [setSorting, sorting]);

  return (
    <Button
      className={clsx(styles.sortingItem, {
        [styles.selected]: sortingFromStore === sorting,
      })}
      onClick={onClick}
    >
      {sorting}
    </Button>
  );
});
