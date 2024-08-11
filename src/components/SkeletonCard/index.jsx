import React, { useState, useEffect } from 'react';

const SkeletonCard = () => {
  return (
    <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem] animate-pulse">
      <div className="relative">
        <div className="w-full h-48 md:h-56 bg-gray-300"></div>
        <div className="absolute top-2 right-2 bg-gray-400 text-white text-xs w-10 h-10 font-bold flex items-center justify-center rounded-full"></div>
        <div className="absolute top-0 left-0 bg-gray-400 text-white text-xs font-semibold px-2 py-1 rounded"></div>
      </div>
      <div className="p-4">
        <div className="mt-2 bg-gray-300 h-4 sm:h-5 w-3/4 rounded"></div>
        <div className="mt-2 bg-gray-300 h-3 w-1/2 rounded"></div>
        <div className="mt-2 bg-gray-300 h-3 sm:h-4 w-full rounded"></div>
      </div>
    </div>
  );
};

const MainComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
          <div className="relative">
            <img
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/laurens-derks-h0tMHMyfr9A-unsplash-1024x678.jpg"
              alt="Gadgets"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="absolute top-2 right-2 bg-fuchsia-600 text-white text-xs w-10 h-10 font-bold flex items-center justify-center rounded-full">
              8.7
            </div>
            <div className="absolute top-0 left-0 bg-fuchsia-600 text-white text-xs font-semibold px-2 py-1 rounded">
              GADGETS
            </div>
          </div>
          <div className="p-4">
            <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug">
              Why Apple Should Skip The MacBook Pro Launch
            </h3>
            <div className="mt-2 text-xs flex items-center">
              <span className="text-black">Shane Doe &bull; </span>
              <span className="text-gray-500">Jan 15, 2021</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              To understand the new smart watches and other pro devices of
              recent focus, we should look to Silicon Valley and...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
