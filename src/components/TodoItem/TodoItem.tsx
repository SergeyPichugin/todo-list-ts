import styles from './todoitem.module.scss';

const handleClickItem = () => {
    alert('click');
}

function TodoItem( {...props} ){
    const {title} = props
    return <li onClick={handleClickItem} className={styles.item}>{title}</li>
}
export default TodoItem;