import { useEffect, useRef, useState } from "react";
import styles from "./TodoForm.module.css";

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
        className={styles.input}
      />
      <button type="submit" className={styles.btn}>
        {edit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
