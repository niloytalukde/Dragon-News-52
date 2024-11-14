import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="*:w-full space-y-2">
            <h2 className="text-xl">Login With </h2>
            <button className="btn">
                <FaGoogle /> Login with Google
            </button>
            <button className="btn">
                <FaGithub></FaGithub> Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;