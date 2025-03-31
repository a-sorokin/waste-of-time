import styles from './Ast.module.scss';
import { useEffect } from 'react';
import { useAstStore } from '@ast/astStore';
import { AstEditor } from '@ast/components/AstEditor/AstEditor';
import { ListOfExpressions } from '@ast/components/ListOfExpressions/ListOfExpressions';
import { Result } from '@ast/components/Result/Result';
import { EXPRESSIONS } from '@ast/expressions';

export const Ast = () => {
  const setExpression = useAstStore((state) => state.setExpression);

  useEffect(() => {
    setExpression(EXPRESSIONS[0].expression);
  }, [setExpression]);

  return (
    <main className={styles.astContainer}>
      <div className={styles.astContent}>
        <div className={styles.list}>
          <ListOfExpressions />
        </div>

        <div className={styles.editor}>
          <AstEditor />
        </div>
      </div>

      <div className={styles.result}>
        <Result />
      </div>
    </main>
  );
};
