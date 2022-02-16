import { useEffect, useState } from "react";
import Navbar from "./../Navbar/Navbar";
import TodoForm from "./../TodoForm/TodoForm";
import TodoList from "./../TodoList/TodoList";
import styles from "./TodoApp.module.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filteredTodosHandler(selectedOption.value);
  }, [todos, selectedOption]);

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

  const filteredTodosHandler = (status) => {
    switch (status) {
      case "Complated":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncomplated":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const selectHandler = (e) => {
    setSelectedOption(e);
    filteredTodosHandler(e.value);
  };

  return (
    <div className={styles.container}>
      <Navbar
        uncompletedTodo={todos.filter((t) => !t.isCompleted).length}
        onChange={selectHandler}
        selectedOption={selectedOption}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onCompelet={CompeletHandler}
        onDelete={removeHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
