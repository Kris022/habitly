import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiPieChart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
        <AiOutlineHome size={30} />
        Home
      </div>
      <div className="nav-item">
        <IoIosAddCircleOutline size={35} />
        Add
      </div>
      <div className="nav-item">
        <FiPieChart size={28} />
        Progress
      </div>
    </div>
  );
};

export default Navbar;
