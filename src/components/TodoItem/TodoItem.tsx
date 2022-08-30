import styles from './todoitem.module.scss';


function TodoItem( {...props} ){
    const {title, completed} = props
    return (
        <li className={styles.item}>
            <input type="checkbox" checked={completed}/> - {title}
        </li>
    )
}
export default TodoItem;