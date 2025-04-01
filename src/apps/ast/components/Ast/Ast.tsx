import styles from './Ast.module.scss';
import { useEffect } from 'react';
import { useAstStore } from '@ast/astStore';
import { Editor } from '@ast/components/Editor/Editor';
import { ListOfExpressions } from '@ast/components/ListOfExpressions/ListOfExpressions';
import { Result } from '@ast/components/Result/Result';
import { EXPRESSIONS } from '@ast/constants/expressions';

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
          <Editor />
        </div>
      </div>

      <div className={styles.result}>
        <Result />
      </div>
    </main>
  );
};
