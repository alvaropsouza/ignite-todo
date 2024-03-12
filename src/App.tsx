import styles from './App.module.css';
import { CreateTodo } from './components/CreateTodo';
import { Header } from './components/Header';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <CreateTodo />
    </div>
  );
}

export default App;
