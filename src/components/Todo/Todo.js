import styles from "./Todo.module.css";

const Todo = ({ todo, onCompelet, onDelete, onEdit }) => {
  return (
    <div className={styles.todo}>
      <div className={`${styles.todoRow} ${styles.detail}`}>
        <h2
          onClick={onCompelet}
          className={todo.isCompleted ? "completed" : "text"}
        >
          {todo.text}
        </h2>
        <div>
          <button onClick={onEdit} className={styles.btn}>
            Edit
          </button>
          <button onClick={onDelete} className={styles.remove}>
            Delete
          </button>
        </div>
      </div>
      <div className={`${styles.todoRow} ${styles.date}`}>
        <span>Create Todo: {todo.dateGenerate}</span>
        <span>Updated Todo: {todo.dateUpdated}</span>
      </div>
    </div>
  );
};

export default Todo;
