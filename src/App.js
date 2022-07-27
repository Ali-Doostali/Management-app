import "./App.css";
import "@animxyz/core";
import SideBar from "./components/sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import ExpenseApp from "./components/ExpenseTracker/ExpenseApp";


function App() {
  return (
    <div>
      <div className="App">
        <SideBar />
        <Routes>  
          <Route path="/" element={<ExpenseApp />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
