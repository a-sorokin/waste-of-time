import styles from './Filters.module.scss';
import { FilterItem } from '@/apps/todoList/components/FilterItem/FilterItem';
import { FILTERS } from '@/apps/todoList/types';

export const Filters = () => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.title}>Show</div>

      <div className={styles.filters}>
        {Object.values(FILTERS).map((filter) => (
          <FilterItem key={`filter-${filter}`} filter={filter} />
        ))}
      </div>
    </div>
  );
};
