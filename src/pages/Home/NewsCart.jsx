/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const NewsCart = ({news}) => {
    const {title,thumbnail_url,details,_id} = news;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={thumbnail_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {
            details.length>200? <p>{details.slice(0,200)}<Link 
            to={`/news/${_id}`}
             className="font-bold block text-blue-700 hover:text-gray-600">Read More...</Link></p>: <p>{details}</p>
          }
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default NewsCart;