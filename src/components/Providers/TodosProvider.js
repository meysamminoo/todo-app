import React, { useContext, useState } from "react";

const TodosContext = React.createContext();
const TodosContextDispatcher = React.createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodosContext.Provider value={todos}>
      <TodosContextDispatcher.Provider value={setTodos}>
        {children}
      </TodosContextDispatcher.Provider>
    </TodosContext.Provider>
  );
};

export default TodosProvider;

export const useTodos = () => useContext(TodosContext);
export const useTodosActions = () => {
  const setTodos = useContext(TodosContextDispatcher);
  const todos = useContext(TodosContext);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => id === todo.id);

    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;

    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;

    setTodos(updatedTodos);
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

  return {
    addTodo,
    updateTodo,
    CompeletHandler,
    removeHandler,
  };
};
