import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer";
import ServiceCard from "./ServiceCard";
import Banner from "./Banner";
import AboutUs from "./AboutUs";


const Home = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 gap-6">
                {/* news container */}
                    {
                        services.map(service => <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>)
                    }
            </div>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;