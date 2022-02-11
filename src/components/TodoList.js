import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, onCompelet, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodo = () => {
    if (todos.lenght === 0) return <p>Add some todo</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompelet={() => onCompelet(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div className={styles.container}>
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodo()}
    </div>
  );
};

export default TodoList;
