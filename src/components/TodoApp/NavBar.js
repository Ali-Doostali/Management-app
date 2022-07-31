import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "UnCompleted", label: "UnCompleted" },
];

const NavBar = ({ unCompletedTodo, selectedOption, onChange }) => {
  if (!unCompletedTodo) return <h2 style={{color: "#7b3eb1"}}>All tasks completed</h2>;
  return (
    <header className="header">
      <span className="span-todo">{unCompletedTodo}</span>
      <h2 className="h2-nav-todo">Todos Are Not Completed</h2>
      <Select
        className="select"
        onChange={onChange}
        value={selectedOption}
        options={options}
      />
    </header>
  );
};

export default NavBar;
