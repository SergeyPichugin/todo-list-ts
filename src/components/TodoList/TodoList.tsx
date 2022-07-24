import TodoItem from "../TodoItem/TodoItem";
import styles from './todolist.module.scss'

const ITEMS = [
    {
        id: 1,
        title: 'Сварить суп',
        completed: false,
    },
    {
        id: 2,
        title: 'Поглуять с кошкой',
        completed: false,
    },
    { 
        id: 3,
        title: 'Постирать ковер',
        completed: false,
    },
    { 
        id: 4,
        title: 'Написать письмо',
        completed: false,
    },
    { 
        id: 5,
        title: 'Пожарить картошку',
        completed: false,
    }
]

function TodoList( { ...props } ){
    const {name} = props
    return( 
        <>
        <h2 className={styles.title}>{name}</h2>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {ITEMS.map(item => <TodoItem title={item.title}/>)}                    
                </ul>
            </div>
        </>
    )
}

export default TodoList;