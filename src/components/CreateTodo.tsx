import React, { useState } from 'react';
import styles from './CreateTodo.module.css';
import { PlusCircle } from 'phosphor-react';

export function CreateTodo({
  onCreateTodo,
}: {
  onCreateTodo: (inputValude: string) => void;
}) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleCreateTodo() {
    if (inputValue.trim() !== '') {
      onCreateTodo(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className={`${styles.wrapper}`}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="todoContent"
        className={`${styles.createTodoInput}`}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className={styles.createTodoButton} onClick={handleCreateTodo}>
        <p className={styles.createTodoButtonWord}>Criar</p>
        <PlusCircle size={20} />
      </button>
    </div>
  );
}
