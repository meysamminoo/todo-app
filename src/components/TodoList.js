import Todo from "./Todo";

const TodoList = ({ todos, onCompelet }) => {
  const renderTodo = () => {
    if (todos.lenght === 0) return <p>Add some todo</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompelet={() => onCompelet(todo.id)}
        />
      );
    });
  };

  return <div>{renderTodo()}</div>;
};

export default TodoList;
