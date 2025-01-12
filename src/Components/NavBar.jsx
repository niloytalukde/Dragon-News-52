import { Link } from "react-router-dom";
import icon from "../assets/assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
    const {user,logOut}=useContext(AuthContext)

    const handelLogout =()=>{
        logOut()
    }
    return (
        <div className="flex justify-between items-center">
         <div>{user?.email}</div>
         <div className="nav space-x-5 ">
         <Link to={"/"}>Home</Link>
         <Link to="/career">Career</Link>
         <Link to="about">About</Link>
         </div>
        
         <div className="login flex space-x-3 items-center">
<img src={icon} alt="" />
{
    user?<div>
        
        <button onClick={handelLogout} className="btn btn-neutral rounded-none">Logout</button>
         </div>
         :<Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
}
         </div>
        </div>
    );
};

export default NavBar;