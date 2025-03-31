import styles from './AstEditor.module.scss';
import { useMemo } from 'react';
import { useAstStore } from '@ast/astStore';

export const AstEditor = () => {
  const expression = useAstStore((state) => state.expression);

  const parsedExpression = useMemo(() => {
    if (!expression) return 'No expression found';
    return JSON.stringify(JSON.parse(expression), null, 2);
  }, [expression]);

  return (
    <div className={styles.astEditorContainer}>
      <pre className={styles.editor}>{parsedExpression}</pre>
    </div>
  );
};
