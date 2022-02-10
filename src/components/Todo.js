const Todo = ({ todo, onCompelet, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div onClick={onCompelet} className={todo.isCompleted ? "completed" : ""}>
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
