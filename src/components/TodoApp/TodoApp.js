import "./TodoApp.css";
import TodoList from "./TodoList";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Swal from "sweetalert2";
import NavBar from "./NavBar";
import { useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updateTodos = [...todos];
    updateTodos[index] = selectedTodo;
    setTodos(updateTodos);
  };

  const removeTodo = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredTodos = todos.filter((t) => t.id !== id);
        setTodos(filteredTodos);
        Swal.fire("Deleted!", "Your Task has been deleted.", "success");
      } else {
        setTodos((preventDefault) => preventDefault);
      }
    });
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "UnCompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="container">
      <h2 className="h2-todo">DailyTasksApp</h2>
      <div className="container-box">
        <NavBar
          unCompletedTodo={todos.filter((t) => !t.isCompleted).length}
          selectedOption={selectedOption}
          onChange={selectHandler}
        />
        <TodoForm submitTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          onComplete={completeTodo}
          onDelete={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
