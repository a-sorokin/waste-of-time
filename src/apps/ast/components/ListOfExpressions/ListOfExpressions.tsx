import styles from './ListOfExpressions.module.scss';
import { useCallback } from 'react';
import { useAstStore } from '@ast/astStore';
import { Button } from '@ast/basicComponents/Button/Button';
import { EXPRESSIONS } from '@ast/expressions';

export const ListOfExpressions = () => {
  const setExpression = useAstStore((state) => state.setExpression);
  const setEditMode = useAstStore((state) => state.setEditMode);

  const onClick = useCallback(
    (expression: string) => {
      setExpression(expression);
      setEditMode(false);
    },
    [setEditMode, setExpression],
  );

  return (
    <div className={styles.listOfExpressions}>
      <div className={styles.mainExpressions}>
        {EXPRESSIONS.map(({ title, expression }, index) => (
          <Button key={`expression-${title}-${index}`} onClick={() => onClick(expression)}>
            {title}
          </Button>
        ))}
      </div>

      <Button onClick={() => setEditMode(true)}>Use your own expression</Button>
    </div>
  );
};
