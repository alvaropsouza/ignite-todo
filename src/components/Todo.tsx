import React, { useState } from 'react';
import styles from './Todo.module.css';
import { Trash } from 'phosphor-react';

interface TodoProps {
  content: string;
  isDone?: boolean;
  onDeleteTodo: (content: string) => void;
}

export function Todo({ content, isDone = false, onDeleteTodo }: TodoProps) {
  const [todoIsDone, setTodoIsDone] = useState(isDone);

  function handleDeleteTodo() {
    onDeleteTodo(content);
  }

  function checkTodoIsDone(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoIsDone(e.target.checked);
  }

  function handleTodoClick() {
    setTodoIsDone(!todoIsDone);
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        name="todoContent"
        id=""
        checked={todoIsDone}
        onChange={checkTodoIsDone}
      />
      <p
        onClick={handleTodoClick}
        style={{
          textDecoration: todoIsDone ? 'line-through' : 'none',
          color: todoIsDone ? 'var(--gray-300)' : 'var(--gray-100)',
        }}
      >
        {content}
      </p>
      <Trash className={styles.trashIcon} onClick={handleDeleteTodo} />
    </div>
  );
}
