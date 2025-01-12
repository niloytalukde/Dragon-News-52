import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const CategoryCard = ({item }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl mb-6">
        <figure>
            <img src={item.thumbnail_url} alt="Article " className="w-full h-52 object-cover" />
        </figure>
        <div className="card-body">
            <div className="flex items-center space-x-2">
                <img src={item.author.img} alt="Author" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-semibold">{item.author.name}</p>
                    <p className="text-sm text-gray-500">{new Date(item.author.published_date).toLocaleDateString()}</p>
                </div>
            </div>
            <h2 className="card-title mt-4">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.details.slice(0, 100)}... <Link to={`/news/${item._id}`} className="text-primary cursor-pointer">Read More</Link></p>
            <div className="card-actions mt-4 flex justify-between items-center">
                <div className="flex items-center space-x-1 text-yellow-500">
                    <FaStar />
                    <span className="text-sm font-semibold">{item.rating.number}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                    <FaEye />
                    <span className="text-sm">{item.total_view}</span>
                </div>
            </div>
        </div>
    </div>
);
};
    


export default CategoryCard