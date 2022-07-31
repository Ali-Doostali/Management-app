import "./App.css";
import "@animxyz/core";
import SideBar from "./components/sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import ExpenseApp from "./components/ExpenseTracker/ExpenseApp";
import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  return (
    <div>
      <div className="App">
        <SideBar />
        <Routes>  
          <Route path="/" element={<ExpenseApp />} />
          <Route path="/todo-app" element={<TodoApp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
