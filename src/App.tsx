import { useState } from 'react';
import styles from './App.module.css';
import { CreateTodo } from './components/CreateTodo';
import { Header } from './components/Header';
import { TodosSummary } from './components/TodosSummary';
import { TodosList } from './components/TodosList';
import { Todo } from './components/Todo';

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

  function deleteTodo(content: string) {
    const todosWithoutDeletedOne = todos.filter(
      (todo) => todo.content !== content
    );
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

  return (
    <div className={`${styles.wrapper}`}>
      <Header />
      <CreateTodo onCreateTodo={createTodo} />
      <div className={`${styles.todosArea}`}>
        <TodosSummary totalTodos={todos.length} />
        <TodosList>
          {todos.map((todo) => {
            return (
              <Todo
                content={todo.content}
                isDone={todo.isDone}
                key={todo.id}
                onDeleteTodo={deleteTodo}
              />
            );
          })}
        </TodosList>
      </div>
    </div>
  );
}

export default App;
