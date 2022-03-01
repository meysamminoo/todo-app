import "./App.css";
import TodosProvider from "./components/Providers/TodosProvider";
import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  return (
    <TodosProvider>
      <div className="App">
        <h1 className="title">Todo App</h1>
        <TodoApp />
      </div>
    </TodosProvider>
  );
}

export default App;
