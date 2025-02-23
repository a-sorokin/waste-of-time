import styles from './TodoList.module.scss';
import '@/apps/todoList/styles/todoStyles.module.scss';
import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { Add } from '@/apps/todoList/components/Add/Add';
import { ErrorBoundary } from '@/apps/todoList/components/ErrorBoundary/ErrorBoundary';
import { Filters } from '@/apps/todoList/components/Filters/Filters';
import { List } from '@/apps/todoList/components/List/List';
import { Sorting } from '@/apps/todoList/components/Sorting/Sorting';
import { Spinner } from '@/apps/todoList/components/Spinner/Spinner';
import { ThemeButton } from '@/apps/todoList/components/ThemeButton/ThemeButton';
import { useGetTodos } from '@/apps/todoList/hooks/useGetTodos';
import { THEMES } from '@/apps/todoList/types';

const Fallback = () => (
  <div className={styles.todoContainer}>
    <div className={styles.todo}>Please reload the app</div>
  </div>
);

export const TodoList = () => {
  const [theme, setTheme] = useState<THEMES>(THEMES.dark);

  const onThemeChange = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === THEMES.dark ? THEMES.light : THEMES.dark));
  }, []);

  useGetTodos();

  return (
    <ErrorBoundary fallback={<Fallback />}>
      <div
        className={clsx(styles.todoContainer, {
          [styles.light]: theme === THEMES.light,
          [styles.dark]: theme === THEMES.dark,
        })}
      >
        <div className={styles.todo}>
          <Spinner />
          <ThemeButton theme={theme} onThemeChange={onThemeChange} />

          <div className={styles.extraControls}>
            <Filters />
            <Sorting />
          </div>

          <div className={styles.main}>
            <Add />
            <List />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};
