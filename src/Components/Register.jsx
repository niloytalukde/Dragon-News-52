import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
const {createNewUser,setUser}=useContext(AuthContext)
const handelSubmit=(e)=>{
e.preventDefault()
// get From data  
const form = new FormData(e.target)
const name =form.get("name")
const email =form.get("email")
const url =form.get("url")
const password =form.get("password")
createNewUser(email,password)
.then(result=>{
  const user =result.user
  console.log(user);
  setUser(user)
}).catch(error=>{
  console.log('Error:',error.message);
})

}

    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 p-10">
        <h2 className="text-2xl justify-center flex">Login Your Account </h2>
  <form onSubmit={handelSubmit} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo Url</span>
      </label>
      <input type="text" name="url" placeholder="Photo url" className="input input-bordered"  />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
    <p className="justify-center flex">You  Have Already An Account ?<Link className="text-red-600" to="/auth/login">Login</Link> </p>
  </form>
  
  </div>
    </div>
    );
};

export default Register;