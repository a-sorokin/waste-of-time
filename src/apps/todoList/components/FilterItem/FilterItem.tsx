import styles from './FilterItem.module.scss';
import { FC, memo, useCallback } from 'react';
import { Button } from '@/apps/todoList/basicComponents/Button/Button';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { FILTERS } from '@/apps/todoList/types';

type Props = {
  filter: FILTERS;
};

export const FilterItem: FC<Props> = memo(({ filter }) => {
  const setFilter = useTodoStore((state) => state.setFilter);

  const onClick = useCallback(() => {
    setFilter(filter);
  }, [filter, setFilter]);

  return (
    <Button className={styles.filterItem} onClick={onClick}>
      {filter}
    </Button>
  );
});
