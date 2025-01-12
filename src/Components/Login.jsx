import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";



const Login = () => {
  const {loginuser,setUser}=useContext(AuthContext)
  const handelLogin =(e)=>{
    e.preventDefault()
const form =e.target
const email=form.email.value
const password=form.password.value
loginuser(email,password)
.then(result=>{
  const user =result.user
  setUser(user)
})
  }
    return (
        <div className="min-h-screen flex justify-center items-center"> 
            <div className="card bg-base-100 w-full max-w-xl shrink-0 p-10">
            <h2 className="text-2xl justify-center flex">Login Your Account </h2>
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="flex justify-center">Dont Have An Account ?<Link className="text-red-600" to="/auth/register">Register</Link> </p>
      </div>
        </div>
    );
};

export default Login