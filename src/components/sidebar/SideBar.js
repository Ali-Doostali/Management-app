import "./SideBar.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsFillCalendar2DayFill } from "react-icons/bs";
import { BsCalculatorFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="sid-container">
      <div className="sid-img">
        <a href="https://github.com/Ali-Doostali" className="img">
          <img src="images/profile-image.jpg" />
          {/* <div></div> */}
        </a>
      </div>
      <div className="sid-item">
        <Link to="/" className="sid-link">
          <AiFillHome className="icon" />
        </Link>
        <Link to="/" className="sid-link">
          <BsCashCoin className="icon" />
        </Link>
        <Link to="/" className="sid-link">
          <BsCardChecklist className="icon" />
        </Link>

        <Link to="/" className="sid-link">
          <BsFillCalendar2DayFill className="icon" />
        </Link>
        <Link to="/" className="sid-link">
          <BsCalculatorFill className="icon" />
        </Link>
        <Link to="/" className="sid-link">
          <BsFillClockFill className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
