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
    let dateGenerate = new Date();
    dateGenerate =
      dateGenerate.toLocaleDateString() +
      " - " +
      dateGenerate.toLocaleTimeString();

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
      dateGenerate,
      dateUpdated: dateGenerate,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newValue) => {
    let dateUpdated = new Date();
    dateUpdated =
      dateUpdated.toLocaleDateString() +
      " - " +
      dateUpdated.toLocaleTimeString();

    const index = todos.findIndex((todo) => id === todo.id);

    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    selectedTodo.dateUpdated = dateUpdated;

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
