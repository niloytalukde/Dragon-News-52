import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import RightNavbar from "./Layout-Components/RightNavbar";
import NavBar from "./NavBar";
import NewsDetailsCard from "./NewsDetailsCard";


const NewsDetails = () => {
    const data =useLoaderData()
    console.log(data.data);
    return (
        <div>
            {/* Header  */}
           <div className="w-11/12 mx-auto" >
            <Header></Header>
            <NavBar></NavBar>
           </div>
           <div className="w-11/12 mx-auto grid grid-cols-12">
            <div className="col-span-9">
<h1 className="text-xl">Dragon News</h1>
{
    data.data.map(item=><div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={item.
                image_url
                }
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title

          }</h2>
          <p>{item.
details
}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>)
}
            </div>
            {/* Right NavBar  */}
            <div className="col-span-3">
                <RightNavbar></RightNavbar>
            </div>
           </div>
        </div>
    );
};

export default NewsDetails;