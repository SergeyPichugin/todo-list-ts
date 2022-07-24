import TodoList from "./components/TodoList/TodoList";
import styles from './app.module.scss'

let date = new Date()

function App() {
  return (
    <div className={styles.layout}>      
      <TodoList name={'My to-do list today:'}/>
      <div className={styles.copyright}>Copyright @ {date.getFullYear()}</div>
    </div>
  );
}

export default App;
