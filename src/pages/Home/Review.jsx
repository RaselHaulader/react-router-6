import React from 'react'

function Review() {
  return (
    <div class="bg-base-100 pb-20 flex flex-col justify-center items-center">
      <h2 className="text-4xl text-center font-bold my-10">Customers feedback</h2>
      <div class="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 my-5 gap-6">
        <div class="bg-gray-900 mx-5 p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold mb-2">John Doe</h2>
          <p class="mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur, nulla et suscipit hendrerit."</p>
          <div class="flex justify-between">
            <span class="text-gray-500">October 8, 2023</span>
            <span class="text-blue-500">★★★★★</span>
          </div>
        </div>

        <div class="bg-gray-900 mx-5 p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold mb-2">Jane Smith</h2>
          <p class="text-gray-700 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur, nulla et suscipit hendrerit."</p>
          <div class="flex justify-between">
            <span class="text-gray-500">October 7, 2023</span>
            <span class="text-blue-500">★★★★★</span>
          </div>
        </div>

        <div class="bg-gray-900 mx-5 p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold mb-2">Sarah Johnson</h2>
          <p class="text-gray-700 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur, nulla et suscipit hendrerit."</p>
          <div class="flex justify-between">
            <span class="text-gray-500">October 6, 2023</span>
            <span class="text-blue-500">★★★★★</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review