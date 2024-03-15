import styles from './App.module.css';
import { CreateTodo } from './components/CreateTodo';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CreateTodo />
      </div>
    </>
  );
}

export default App;
