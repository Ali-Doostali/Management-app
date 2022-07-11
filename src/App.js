import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <div className="App">
        <SideBar />
        <Routes>  
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
