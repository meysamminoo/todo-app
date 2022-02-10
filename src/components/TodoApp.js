import { useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
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
  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => id === todo.id);

    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;

    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;

    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <Navbar uncompletedTodo={todos.filter((t) => !t.isCompleted).length} />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onCompelet={CompeletHandler}
        onDelete={removeHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
