import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { name, image, description,price, id } = service;
    return (
        <div className="card bg-base-100 w-full shadow-xl mb-16">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                  {name}
                </h2>
                <p>{price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline"><Link to={`/service/${id}`}>Products</Link></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;