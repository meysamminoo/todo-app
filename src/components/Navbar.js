const Navbar = ({ uncompletedTodo, onSelect, status }) => {
  if (!uncompletedTodo) return <h1>add some today todos</h1>;

  return (
    <header>
      <span>{uncompletedTodo}</span>
      <h1> not completed todos</h1>
      <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Complated">Complated</option>
        <option value="Uncomplated">Uncomplated</option>
      </select>
    </header>
  );
};

export default Navbar;
