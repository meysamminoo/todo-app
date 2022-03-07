import { useEffect, useState } from "react";
import { useTodos } from "../Providers/TodosProvider";
import Navbar from "./../Navbar/Navbar";
import TodoForm from "./../TodoForm/TodoForm";
import TodoList from "./../TodoList/TodoList";
import styles from "./TodoApp.module.css";

const TodoApp = () => {
  const todos = useTodos();
  const [selectedOption, setSelectedOption] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filteredTodosHandler(selectedOption.value);
  }, [todos, selectedOption]);

  const filteredTodosHandler = (status) => {
    switch (status) {
      case "Complated":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncomplated":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      case "Time":
        setFilteredTodos(
          todos.sort((a, b) => {
            // todo: splite date and time
            a = a.dateUpdated.split("-");
            b = b.dateUpdated.split("-");
            // todo: set time and sort
            a = a[1].split("/").reverse().join();
            b = b[1].split("/").reverse().join();
            return b > a ? 1 : b < a ? -1 : 0;
          })
        );
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
      <Navbar onChange={selectHandler} selectedOption={selectedOption} />
      <TodoForm />
      <TodoList todos={filteredTodos} />
    </div>
  );
};

export default TodoApp;
