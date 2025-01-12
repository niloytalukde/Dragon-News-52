import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const AuthLayout = () => {
    return (
        <div className="font-poppings bg-[#f3f3f3]">
          <div className="py-3 w-11/12 mx-auto ">
            <NavBar></NavBar>
          </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;