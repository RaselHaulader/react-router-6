import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer'

function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <h2 className="text-4xl text-center font-bold my-10">Contact with us</h2>
      <form action="#" method="post" class="space-y-4 w-6/12 mx-auto pb-30 mb-40">
        <div>
          <label for="name" class="block text-gray-700">Name</label>
          <input type="text" id="name" name="name" class="w-full input input-bordered border rounded px-3 py-2" placeholder="Your name" required />
        </div>

        <div>
          <label for="email" class="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="w-full input input-bordered border rounded px-3 py-2" placeholder="Your email" required />
        </div>

        <div>
          <label for="message" class="block text-gray-700">Message</label>
          <textarea id="message" name="message" class="w-full input input-bordered border rounded px-3 py-2" rows="5" placeholder="Your message" required></textarea>
        </div>

        <button type="submit" class="bg-violet-600 text-white px-4 w-full py-2 rounded hover:bg-blue-700 transition duration-300">Send Your Message</button>
      </form>
      <Footer></Footer>
    </>
  )
}

export default Contact