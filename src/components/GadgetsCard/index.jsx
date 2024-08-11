import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import SkeletonCard from "../SkeletonCard";
import MainComponent from "../SkeletonCard";

const GadgetShowcase = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mt-4 pl-4 lg:pl-36">Browsing: Gadgets</h1>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 py-8 lg:py-28">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activePage === 1 && (
                <>
                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-1024x683.jpg"
                        alt=""
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
                        DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-1024x683.jpg"
                        alt=""
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
                        DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/muhammad-faiz-zulkeflee-p-yGtLN-GKA-unsplash-1-1024x1024.jpg"
                        alt=""
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
                        Thousands Of PC Games Discounted In New Black Friday Sale
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/blaz-erzetic-ChSgE4K1iGY-unsplash-1024x683.jpg"
                        alt=""
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
                        Could Solar-Powered Headphones Be The Next Must-Have?
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/pexels-dids-3657268-1024x683.jpg"
                        alt=""
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
                        Take Your Photography to The Next Level with This Drone
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-1024x445.jpg"
                        alt=""
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
                        Oculus Founder Makes a VR Headset That Can Literally Kill You
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422797426_xl-2015-1-1024x681.jpg"
                        alt=""
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
                        Braun Series 7 Electric Shaver Review: Quality at a Good Price
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_443469058_xl-2015-1-1024x693.jpg"
                        alt=""
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
                        Google Pixel 7, iPhone 14 Compared: Check Out 5 Major Differences
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/laurens-derks-h0tMHMyfr9A-unsplash-1024x678.jpg"
                        alt=""
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
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>
                 <MainComponent/>
                </>
              )}

              {activePage === 2 && (
                <>
                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-1024x652.jpg"
                        alt=""
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-fuchsia-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        GADGETS
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug">
                        The Famous Dyson Bladeless Fan is On Sale at Walmart
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-1024x686.jpg"
                        alt=""
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-fuchsia-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        GADGETS
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug">
                        Best Luxury Hotels In Bogotá 2022
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sajad-nori-CeyE899Q73Y-unsplash-450x300.jpg"
                        alt=""
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-fuchsia-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        GADGETS
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug">
                        Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/billy-freeman-yk-jzxSIk90-unsplash-450x253.jpg"
                        alt=""
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-fuchsia-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        GADGETS
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug">
                        Leaf Headphones: Here are Some of The Best Devices from This Brand
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/jerin-john-Smbz6GQt_CI-unsplash-2-450x264.jpg"
                        alt=""
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-fuchsia-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        GADGETS
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug">
                        Wireless Earbuds May Help Amplify Sound for People with Hearing Loss
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-1024x579.jpg"
                        alt=""
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-fuchsia-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        GADGETS
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug">
                        Study: Earbuds Use, Youngsters at High Risk of Hearing Loss
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-1024x607.jpg"
                        alt=""
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-fuchsia-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        GADGETS
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug">
                        PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-lg shadow-md overflow-hidden w-full sm:w-[25rem]">
                    <div className="relative">
                      <img
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
                        alt=""
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-fuchsia-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        GADGETS
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug">
                        Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone
                      </h3>
                      <div className="mt-2 text-xs flex items-center">
                        <span className="text-black">Shane Doe &bull; </span>
                        <span className="text-gray-500">Jan 15, 2021</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and...
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => handlePageChange(1)}
                className={`px-3 py-1 mx-1 text-gray-800 ${
                  activePage === 1 ? "bg-blue-600 text-white" : "bg-gray-200"
                } rounded`}
              >
                1
              </button>
              <button
                onClick={() => handlePageChange(2)}
                className={`px-3 py-1 mx-1 text-gray-800 ${
                  activePage === 2 ? "bg-blue-600 text-white" : "bg-gray-200"
                } rounded`}
              >
                2
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="p-0">
              <div className="relative mb-6">
                <img
                  src="https://smartmag.theme-sphere.com/news-bulletin/wp-content/uploads/sites/26/2021/11/Smart-Woman.jpg"
                  alt=""
                  className="w-full h-64 object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Top Posts</h3>
                <div className="flex items-center mb-4">
                  <img
                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-768x512.jpg"
                    alt=""
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h4 className="text-md font-semibold">
                      Popular New Xbox Game Pass Game Being Review Bombed With “0s”
                    </h4>
                    <div className="text-gray-500 text-sm">
                      <span>Jan 14, 2021</span> ·
                      <span className="text-red-500 ml-2">7,792 Views</span>
                    </div>
                  </div>
                </div>
                {/* Repeat similar structure for other posts */}
              </div>

              <div className="p-3">
                <h2 className="text-lg font-bold mb-4 text-start">Stay In Touch</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-center border border-gray-300 p-1">
                    <FaFacebookF className="w-6 h-6 text-blue-600" />
                    <div className="ml-2 text-sm font-medium">1.1K Facebook</div>
                  </div>
                  <div className="flex items-center justify-center border border-gray-300 p-1">
                    <FaTwitter className="w-6 h-6 text-blue-400" />
                    <div className="ml-2 text-sm font-medium">68.9K Twitter</div>
                  </div>
                  <div className="flex items-center justify-center border border-gray-300 p-1">
                    <FaPinterestP className="w-6 h-6 text-red-600" />
                    <div className="ml-2 text-sm font-medium">10.7K Pinterest</div>
                  </div>
                  <div className="flex items-center justify-center border border-gray-300 p-1">
                    <FaInstagram className="w-6 h-6 text-pink-600" />
                    <div className="ml-2 text-sm font-medium">46.4K Instagram</div>
                  </div>
                  <div className="flex items-center justify-center border h-[3rem] border-gray-300 p-1">
                    <FaTelegramPlane className="w-6 h-6 text-blue-500" />
                    <div className="ml-2 text-sm font-medium">Telegram</div>
                  </div>
                  <div className="flex items-center justify-center border border-gray-300 p-1">
                    <FaWhatsapp className="w-6 h-6 text-green-500" />
                    <div className="ml-2 text-sm font-medium">WhatsApp</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Latest Reviews</h3>
                <div className="p-0 mb-2">
                  <div className="relative">
                    <img
                      src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4-768x513.jpg"
                      alt=""
                      className="w-full h-40 rounded-lg object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-pink-600 text-white px-2 py-1 text-xs font-bold rounded">
                      GAMING
                    </div>
                    <div className="absolute top-2 right-2 bg-blue-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                      85%
                    </div>
                  </div>
                  <h4 className="text-md font-semibold mt-4">
                    Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?
                  </h4>
                  <div className="text-gray-500 text-sm mt-2">Shane Doe · Jan 15, 2021</div>
                </div>
                {/* Repeat similar structure for other reviews */}
              </div>

              <div className="mt-8 text-center pr-6">
                <div className="border p-6 rounded-lg h-full lg:h-[21rem] w-full lg:w-[20rem]">
                  <h3 className="text-black text-xl font-bold w-full text-center whitespace-nowrap">
                    Subscribe to Updates
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Get the latest creative news from FooBar about art, design, and business.
                  </p>
                  <form className="mt-4">
                    <input
                      type="email"
                      placeholder="Your email address.."
                      className="w-full p-3 rounded bg-white text-gray-700 placeholder-gray-500 border border-gray-300"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-700 text-bold text-white p-3 mt-2 rounded"
                    >
                      Subscribe
                    </button>
                    <div className="flex items-center mt-2 justify-center">
                      <input type="checkbox" className="mr-2" />
                      <p className="text-gray-400 text-sm">
                        By signing up, you agree to our terms and our{" "}
                        <a href="/" className="text-blue-700 underline">
                          Privacy Policy
                        </a>{" "}
                        agreement.
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              <div className="relative mt-6">
                <img
                  src="https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/300x600-banner-tech-02.jpg"
                  alt=""
                  className="w-full lg:w-[18rem] h-[35rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GadgetShowcase;
