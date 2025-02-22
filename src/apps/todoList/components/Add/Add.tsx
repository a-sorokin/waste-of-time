import styles from './Add.module.scss';
import { useCallback, useState } from 'react';
import { Button } from '@/apps/todoList/basicComponents/Button/Button';
import { Input } from '@/apps/todoList/basicComponents/Input/Input';
import { useTodoStore } from '@/apps/todoList/todoStore';

const TEXT_LIMIT = 100;

export const Add = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [todoText, setTodoText] = useState('');
  const [error, setError] = useState(false);

  const onClick = useCallback(() => {
    if (!todoText || error) return;
    addTodo(todoText);
    setTodoText('');
  }, [addTodo, error, todoText]);

  const onTextChange = useCallback((value: string) => {
    setTodoText(value);
    setError(value.length > TEXT_LIMIT);
  }, []);

  const onEscape = useCallback(() => setTodoText(''), []);

  return (
    <div className={styles.add}>
      <div className={styles.title}>Add todo</div>
      <Input text={todoText} onChange={onTextChange} error={error} onEnterPress={onClick} onEscapePress={onEscape} />
      <Button onClick={onClick} disabled={error || !todoText.length}>
        Add Todo
      </Button>
    </div>
  );
};
