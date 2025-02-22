import styles from './Sorting.module.scss';
import { SortingItem } from '@/apps/todoList/components/SortingItem/SortingItem';
import { SORTING } from '@/apps/todoList/types';

export const Sorting = () => {
  return (
    <div className={styles.sortingContainer}>
      <div className={styles.title}>Sort by</div>

      <div className={styles.sorting}>
        {Object.values(SORTING).map((sorting) => (
          <SortingItem key={`sorting-${sorting}`} sorting={sorting} />
        ))}
      </div>
    </div>
  );
};
