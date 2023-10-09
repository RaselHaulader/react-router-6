import React from 'react'

function AboutUs() {
  return (
    <section className="bg-gray-100 py-16" id="about">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-8">We are a dedicated team of event management professionals committed to making your events unforgettable.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600">Our mission is to provide seamless event planning and execution, tailored to our clients' unique needs and preferences. We strive to create memorable experiences and exceed expectations.</p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Our Team</h3>
          <p className="text-gray-600">Our team is composed of experienced event managers, coordinators, designers, and logistics experts who are passionate about delivering exceptional events. We work collaboratively to ensure every detail is perfect and in line with your vision.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUs