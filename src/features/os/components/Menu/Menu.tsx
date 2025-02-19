import styles from './Menu.module.scss';
import { useCallback, useState } from 'react';
import { Button } from '@/basicComponents/Button/Button';

const MENU_ITEMS = ['About this computer', 'System Settings', 'Shut Down...'];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={styles.container}>
      <Button onClick={onClick}>[Menu]</Button>

      {isOpen ? (
        <div className={styles.menu}>
          {MENU_ITEMS.map((item) => (
            <div key={`menu-${item}`} className={styles.item}>
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
