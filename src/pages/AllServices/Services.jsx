import React from 'react'
import Navbar from "../Shared/Navbar/Navbar"
import Footer from "../Shared/Footer"
import ServiceCard from "../Home/ServiceCard"
import { useLoaderData } from "react-router-dom";

function Services() {
  const services = useLoaderData();
  return (
    <>
      <Navbar></Navbar>
      <h2 className="text-4xl text-center font-bold my-10">All services</h2>
      <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 my-5 gap-6">
        {/* news container */}
        {
          services.map(service => <ServiceCard
            key={service.id}
            service={service}
          ></ServiceCard>)
        }
      </div>
      <Footer></Footer>
    </>
  )
}

export default Services