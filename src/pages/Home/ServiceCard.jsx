import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { name, image, description,price, id } = service;
    return (
        <div data-aos="zoom-in" className="card bg-gray-900 w-full shadow-xl mb-16">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                  {name}
                </h2>
                <p>{price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline"><Link to={`/service/${id}`}>Details</Link></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;