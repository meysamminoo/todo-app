import { useEffect, useRef, useState } from "react";

const TodoForm = ({ edit, submitTodo }) => {
  const [input, setInput] = useState(edit ? edit.text : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("add todo");
      return;
    }

    submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder={edit ? "update todo ..." : "add todo ..."}
        ref={inputRef}
      />
      <button type="submit">{edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
