import styles from './ThemeButton.module.scss';
import { FC, memo } from 'react';
import { Button } from '@/apps/todoList/basicComponents/Button/Button';
import { THEMES } from '@/apps/todoList/types';

type Props = {
  theme: THEMES;
  onThemeChange: () => void;
};

export const ThemeButton: FC<Props> = memo(({ theme, onThemeChange }) => {
  return (
    <Button className={styles.themeButton} onClick={onThemeChange}>
      {theme === THEMES.dark ? THEMES.light : THEMES.dark}
    </Button>
  );
});
