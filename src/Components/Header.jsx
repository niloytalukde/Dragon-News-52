import moment from "moment";
import logo from "../assets/assets/logo.png"

const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-2 py-3 mt-5">
                <img className="w-[300px]" src={logo} alt="" />
                <h1 className="text-gray-400">Journalism Without Fear or Favour</h1>
                <p>{moment().format("ddd, MMMM Do YYYY, ")}</p>
            </div>
        </div>
    );
};

export default Header;