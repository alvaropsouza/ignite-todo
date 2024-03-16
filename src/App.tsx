import { useState } from 'react';
import styles from './App.module.css';
import { CreateTodo } from './components/CreateTodo';
import { Header } from './components/Header';
import { TodosSummary } from './components/TodosSummary';
import { TodosList } from './components/TodosList';
import { Todo } from './components/Todo';
import { EmptyTodos } from './components/EmptyTodos';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'Learn about the history of ancient civilizations.',
      isDone: true,
    },
    {
      id: 2,
      content: 'Explore new hiking trails in the nearby mountains.',
      isDone: true,
    },
    {
      id: 3,
      content: 'Research the impact of climate change on marine ecosystems.',
      isDone: false,
    },
    {
      id: 4,
      content:
        'Volunteer at a local animal shelter to help care for abandoned pets.',
      isDone: false,
    },
    {
      id: 5,
      content: 'Attend a photography workshop to improve your skills.',
      isDone: false,
    },
  ]);

  function deleteTodo(id: number) {
    const todosWithoutDeletedOne = todos.filter((todo) => todo.id !== id);
    setTodos(todosWithoutDeletedOne);
  }

  function createTodo(content: string) {
    const newTodo = {
      id: todos.length + 1,
      content: content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id: number) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div className={`${styles.wrapper}`}>
      <Header />
      <CreateTodo onCreateTodo={createTodo} />
      <div className={`${styles.todosArea}`}>
        <TodosSummary
          totalTodos={todos.length}
          amountDone={todos.filter((todo) => todo.isDone).length}
        />
        {todos.length > 0 ? (
          <TodosList>
            {todos.map((todo) => {
              return (
                <Todo
                  content={todo.content}
                  isDone={todo.isDone}
                  key={todo.id}
                  onDeleteTodo={() => deleteTodo(todo.id)}
                  onToggleTodo={() => toggleTodo(todo.id)} // Passing the toggle function
                />
              );
            })}
          </TodosList>
        ) : (
          <EmptyTodos />
        )}
      </div>
    </div>
  );
}

export default App;
