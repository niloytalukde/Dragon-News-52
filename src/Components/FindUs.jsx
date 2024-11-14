import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h2 className="text-xl">Find us  </h2>
            <div>
            <div className="join flex *:bg-base-100 join-vertical">
  <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
  <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;