const Todo = ({ todo, onCompelet, onDelete }) => {
  return (
    <div className="todo">
      <div onClick={onCompelet} className={todo.isCompleted ? "completed" : ""}>
        {todo.text}
      </div>
      <div>
        <button>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
