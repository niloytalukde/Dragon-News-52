import { Link } from "react-router-dom";
import icon from "../assets/assets/user.png"

const NavBar = () => {
    return (
        <div className="flex justify-between items-center">
         <div></div>
         <div className="nav space-x-5 ">
         <Link to={"/"}>Home</Link>
         <Link to="/career">Career</Link>
         <Link to="about">About</Link>
         </div>
        
         <div className="login flex space-x-3 items-center">
<img src={icon} alt="" />
<button className="btn btn-neutral rounded-none">Login</button>
         </div>
        </div>
    );
};

export default NavBar;