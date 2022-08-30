import TodoItem from "../TodoItem/TodoItem";
import styles from './todolist.module.scss'
import { useGetTodosQuery, useGetUsersQuery } from "../../redux";

function TodoList( { ...props } ){
    const { data, isLoading, isError } = useGetTodosQuery('')
    const {data: users} = useGetUsersQuery('')
    const { name } = props

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error</h1>
    console.log(users)

    return(
        <>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {data?.map(item => <TodoItem title={item.title} completed={item.completed} key={item.id}/>)}
                </ul>
            </div>
        </>
    )
}

export default TodoList;