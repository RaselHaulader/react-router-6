import { useParams, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer";

const Service = () => {
    const { id } = useParams();
    const services = useLoaderData();
    const service = services.filter(item => item.id === id)
    console.log({ service });
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;