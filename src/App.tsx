import styles from './App.module.css';
import { CreateTodo } from './components/CreateTodo';
import { Header } from './components/Header';
import { TodosSummary } from './components/TodosSummary';

function App() {
  return (
    <>
      <Header />
      <CreateTodo />
      <div className={`${styles.wrapper}`}>
        <TodosSummary />
      </div>
    </>
  );
}

export default App;
