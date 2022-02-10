import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Complated", label: "Complated" },
  { value: "Uncomplated", label: "Uncomplated" },
];

const Navbar = ({ uncompletedTodo, onChange, selectedOption }) => {
  if (!uncompletedTodo) return <h1>add some today todos</h1>;

  return (
    <header>
      <span>{uncompletedTodo}</span>
      <h1> not completed todos</h1>

      <Select value={selectedOption} onChange={onChange} options={options} />
    </header>
  );
};

export default Navbar;
