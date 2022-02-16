import styles from "./Todo.module.css";

const Todo = ({ todo, onCompelet, onDelete, onEdit }) => {
  return (
    <div className={styles.todo}>
      <div
        onClick={onCompelet}
        className={todo.isCompleted ? "completed" : "text"}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit} className={styles.btn}>
          Edit
        </button>
        <button onClick={onDelete} className={styles.remove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
