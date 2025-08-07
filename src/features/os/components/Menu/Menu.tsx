import styles from './Menu.module.scss';
import { useCallback, useMemo, useState } from 'react';
import { Button } from '@/basicComponents/Button/Button';
import { useOsStore } from '@/features/os';
import { APPS } from '@/features/os/constants';
import { closeApp } from '@/ipcRenderer/actions/ipcMainActions';

export const Menu = () => {
  const runApp = useOsStore((state) => state.runApp);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = useMemo(
    () => [
      { text: 'About this computer', callback: () => runApp(APPS.about) },
      { text: 'System Settings - no access' },
      { text: 'Shut Down...', callback: closeApp },
    ],
    [runApp],
  );

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleClick = useCallback(
    (callback: (() => void) | undefined) => () => {
      setIsOpen(false);
      callback?.();
    },
    [],
  );

  return (
    <div className={styles.container}>
      <Button onClick={toggleMenu}>[Menu]</Button>
      {isOpen && (
        <div className={styles.menu} role="menu">
          {menuItems.map(({ text, callback }) => (
            <div key={text} className={styles.item} onClick={handleClick(callback)} role="menuitem">
              {text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
