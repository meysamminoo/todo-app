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
export const useTodosActions = () => useContext(TodosContextDispatcher);
