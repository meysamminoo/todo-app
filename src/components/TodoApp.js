import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const CompeletHandler = (id) => {
    const index = todos.findIndex((todo) => id === todo.id);

    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;

    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;

    setTodos(updatedTodos);
  };

  const removeHandler = (id) => {
    const filteredTodos = todos.filter((todo) => id !== todo.id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onCompelet={CompeletHandler}
        onDelete={removeHandler}
      />
    </div>
  );
};

export default TodoApp;
