import Select from "react-select";
import styles from "./Navbar.module.css";

const options = [
  { value: "All", label: "All" },
  { value: "Complated", label: "Complated" },
  { value: "Uncomplated", label: "Uncomplated" },
];

const Navbar = ({ uncompletedTodo, onChange, selectedOption }) => {
  if (!uncompletedTodo)
    return <h1 className={styles.title}>Add some today todos</h1>;

  return (
    <header className={styles.header}>
      <span className={styles.number}>{uncompletedTodo}</span>
      <h1> Not completed todos</h1>

      <Select
        value={selectedOption}
        onChange={onChange}
        options={options}
        className={styles.select}
      />
    </header>
  );
};

export default Navbar;
