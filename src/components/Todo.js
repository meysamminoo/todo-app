const Todo = ({ todo, onCompelet }) => {
  return (
    <div className="todo">
      <div className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onCompelet}>Completed</button>
      </div>
    </div>
  );
};

export default Todo;
