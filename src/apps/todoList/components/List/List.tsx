import styles from './List.module.scss';
import { FilterWrapper } from '@/apps/todoList/components/FilterWrapper/FilterWrapper';
import { Item } from '@/apps/todoList/components/Item/Item';
import { useTodoStore } from '@/apps/todoList/todoStore';

export const List = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className={styles.list}>
      {Object.values(todos).map(({ id }) => (
        <FilterWrapper key={`todoItem-${id}`} id={id}>
          <Item id={id} />
        </FilterWrapper>
      ))}
    </div>
  );
};
