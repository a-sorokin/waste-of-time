import styles from './List.module.scss';
import { useMemo } from 'react';
import { FilterWrapper } from '@/apps/todoList/components/FilterWrapper/FilterWrapper';
import { Item } from '@/apps/todoList/components/Item/Item';
import { sortByDate, sortByName, sortByPriority } from '@/apps/todoList/components/List/utils';
import { useTodoStore } from '@/apps/todoList/todoStore';
import { SORTING } from '@/apps/todoList/types';

export const List = () => {
  const todos = useTodoStore((state) => state.todos);
  const sorting = useTodoStore((state) => state.sorting);

  const sortedItems = useMemo(() => {
    const items = Object.values(todos);

    if (sorting === SORTING.byDate) return items.sort(sortByDate);
    if (sorting === SORTING.byName) return items.sort(sortByName);
    if (sorting === SORTING.byPriority) return items.sort(sortByPriority);
    return items;
  }, [sorting, todos]);

  return (
    <div className={styles.list}>
      {sortedItems.map(({ id }) => (
        <FilterWrapper key={`todoItem-${id}`} id={id}>
          <Item id={id} />
        </FilterWrapper>
      ))}
    </div>
  );
};
