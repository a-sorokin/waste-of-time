import styles from './ThemeWrapper.module.scss';
import { FC, ReactNode, memo, useCallback, useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/apps/todoList/basicComponents/Button/Button';
import { THEMES } from '@/apps/todoList/types';

type Props = {
  children: ReactNode;
};

export const ThemeWrapper: FC<Props> = memo(({ children }) => {
  const [theme, setTheme] = useState<THEMES>(THEMES.dark);

  const onThemeChange = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === THEMES.dark ? THEMES.light : THEMES.dark));
  }, []);

  return (
    <div
      className={clsx(styles.todoContainer, {
        [styles.light]: theme === THEMES.light,
        [styles.dark]: theme === THEMES.dark,
      })}
    >
      <>
        <Button className={styles.themeButton} onClick={onThemeChange}>
          {theme === THEMES.dark ? THEMES.light : THEMES.dark}
        </Button>

        {children}
      </>
    </div>
  );
});
