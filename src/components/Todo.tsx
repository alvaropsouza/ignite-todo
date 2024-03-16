import React, { useState } from 'react';
import styles from './Todo.module.css';
import { Trash } from 'phosphor-react';

interface TodoProps {
  content: string;
  isDone?: boolean;
}

export function Todo({ content, isDone = false }: TodoProps) {
  const [todoIsDone, setTodoIsDone] = useState(isDone);

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
        name=""
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
      <Trash
        style={{
          width: '1.5rem',
          height: '1rem',
          cursor: 'pointer',
          color: 'var(--gray-300)',
          marginLeft: 'auto',
        }}
      />
    </div>
  );
}
