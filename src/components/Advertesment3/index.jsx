import React from 'react';

const HighlightedReview = () => {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="flex items-center justify-center mb-5">
        <div className="flex-grow h-px bg-gray-400"></div>
        <h2 className="mx-4 text-[1.6rem] font-bold">Featured Reviews</h2>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="flex flex-col md:flex-row bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden h-[24rem]">
        <div className="flex flex-col justify-center p-5 flex-1">
          <span className="bg-pink-500 text-white font-semibold px-3 py-1 rounded-lg text-sm w-[4.8rem] inline-block mb-4">Gaming</span>
          <h3 className="text-[1.6rem] font-bold mb-3 leading-snug">Pico 4 Review: Is It Better Than Quest 2?</h3>
          <div className="flex items-center mb-4">
            <img src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg" alt="" className="w-9 h-9 rounded-full mr-3" />
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-sm">Shane Doe</p>
              <span className="text-gray-400 text-xs">· Jan 15, 2021</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm font-semibold">To understand the latest smartwatches and other pro devices, let's delve into the details...</p>
        </div>
        <div className="relative flex-1">
          <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4.jpg" alt="Review" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-blue-800 text-white font-bold py-2 px-4 w-[3.2rem] h-[3.2rem] rounded-full flex items-center justify-center">85%</div>
        </div>
      </div>
    </div>
  );
}

export default HighlightedReview;
