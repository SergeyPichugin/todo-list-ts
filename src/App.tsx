import { Routes, Route, Link, Navigate } from 'react-router-dom';
import TodoList from "./components/TodoList/TodoList";
import styles from './app.module.scss'

let date = new Date()

function App() {
    const ToDoList = () => (
        <div className={styles.layout}>
            <TodoList name={'My to-do list today:'}/>
            <div className={styles.copyright}>Copyright @ {date.getFullYear()}</div>
        </div>
    )
  return (
      <Routes>
          <Route path={'/'} element={<ToDoList />} />
          <Route path={'/add'} element={<div>Add page</div>}/>
          <Route path={'*'} element={<Navigate to={'https://sravni.ru/'} replace={false}/>}/>
      </Routes>
  );
}

export default App;
