import styles from './Menu.module.scss';
import { useCallback, useState } from 'react';
import { Button } from '@/basicComponents/Button/Button';
import { closeApp } from '@/ipcRenderer/actions/ipcMainActions';

const MENU_ITEMS = [
  { text: 'About this computer - no access' },
  { text: 'System Settings - no access' },
  { text: 'Shut Down...', callback: closeApp },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className={styles.container}>
      <Button onClick={onClick}>[Menu]</Button>

      {isOpen ? (
        <div className={styles.menu}>
          {MENU_ITEMS.map(({ text, callback }) => (
            <div key={`menu-${text}`} className={styles.item} onClick={callback}>
              {text}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
