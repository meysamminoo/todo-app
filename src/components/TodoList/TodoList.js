import { useState } from "react";
import { useTodosActions } from "../Providers/TodosProvider";
import Todo from "./../Todo/Todo";
import TodoForm from "./../TodoForm/TodoForm";
import styles from "./TodoList.module.css";

const TodoList = ({ todos }) => {
  const { updateTodo, CompeletHandler, removeHandler } = useTodosActions();

  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    updateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodo = () => {
    if (todos.lenght === 0) return <p>Add some todo</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompelet={() => CompeletHandler(todo.id)}
          onDelete={() => removeHandler(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div className={styles.container}>
      {/* {edit.id ? <TodoForm addTodo={editTodo} edit={edit} /> : renderTodo()} */}
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodo()}
    </div>
  );
};

export default TodoList;
