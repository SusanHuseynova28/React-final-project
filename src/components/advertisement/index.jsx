import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="relative w-full max-w-5xl h-[12rem] bg-gradient-to-r from-black via-teal-700 to-black rounded-lg overflow-hidden shadow-lg flex items-center px-8">
        <div className="text-white">
          <h3 className="text-3xl font-bold">NEW SMARTMAG</h3>
          <p className="mt-2 text-lg">Trusted by 15000+ users worldwide</p>
        </div>
        <button className="ml-auto bg-white text-black font-bold py-2 px-6 rounded-lg shadow-md">
          GET SMARTMAG
        </button>
        <img
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-300x200.jpg"
          alt="Promotion"
          className="absolute right-0 top-0 h-full w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
