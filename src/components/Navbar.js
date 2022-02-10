const Navbar = ({ uncompletedTodo }) => {
  return (
    <header>
      {uncompletedTodo ? (
        <>
          <span>{uncompletedTodo}</span>
          <h1> not completed todos</h1>
        </>
      ) : (
        <h1>add some today todos</h1>
      )}
    </header>
  );
};

export default Navbar;
