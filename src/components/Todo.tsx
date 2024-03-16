import React, { useState } from 'react';
import styles from './Todo.module.css';

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
      <p onClick={handleTodoClick}>{content}</p>
    </div>
  );
}