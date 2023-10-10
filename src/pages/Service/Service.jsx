import { useParams, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer";

const Service = () => {
    const { id } = useParams();
    const services = useLoaderData();
    const service = services.filter(item => item.id === parseInt(id));
    const { name, image, description,price } = service[0];
    return (
        <div className="bg-slate-900">
            <Navbar></Navbar>
            <hr />
            <div className="grid my-40 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 gap-6">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;