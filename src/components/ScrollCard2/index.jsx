import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const RecentPosts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      
    }, 2000); 
  };

  return (
    <div className="container px-5 flex justify-center items-start mt-[2.8rem]">
      <div className="flex-[1.1] pr-5">
        <div className="space-y-7">
          <div className="space-y-3">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-[1.8rem] font-semibold ml-[0.4rem]">
                Latest Gadgets
              </h2>
              <hr className="flex-1 mx-5 border-gray-400" />
            </div>
            <div className="bg-white rounded-lg shadow-md flex">
              <div className="relative w-[35%] h-[15rem] rounded-l-lg overflow-hidden">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-1024x683.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  GAMING
                </div>
              </div>
              <div className="p-5 flex-1">
                <h2 className="text-[1.2rem] font-bold mb-3">
                  Game Development This Week: Save On Essential Tools and More
                </h2>
                <div className="text-gray-500 text-sm mb-5 flex items-center">
                  <img
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt=""
                    className="w-9 h-9 rounded-full mr-3"
                  />
                  Shane Doe · Nov 19, 2022
                </div>
                <p className="text-gray-700">
                  To understand the new smart watches and other pro devices of
                  recent focus, we should look to Silicon Valley and the
                  quantified...
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md flex ">
              <div className="relative w-[35%] h-[15rem] rounded-l-lg overflow-hidden">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1024x582.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  TECHNOLOGY
                </div>
              </div>
              <div className="p-5 flex-1">
                <h2 className="text-[1.2rem] font-bold mb-3">
                  Is the Hyperloop Doomed? What Elon Musk's Latest Setback
                  Really Means
                </h2>
                <div className="text-gray-500 text-sm mb-5 flex items-center">
                  <img
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt=""
                    className="w-9 h-9 rounded-full mr-3"
                  />
                  Shane Doe · Mar 10, 2022
                </div>
                <p className="text-gray-700">
                  To understand the new smart watches and other pro devices of
                  recent focus, we should look to Silicon Valley and the
                  quantified...
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md flex">
              <div className="relative w-[35%] h-[15rem] rounded-l-lg overflow-hidden">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-1024x683.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  TECHNOLOGY
                </div>
              </div>
              <div className="p-5 flex-1">
                <h2 className="text-[1.2rem] font-bold mb-3">
                  The Best Early Black Friday Deals on Gaming Laptops and
                  Accessories
                </h2>
                <div className="text-gray-500 text-sm mb-5 flex items-center">
                  <img
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt=""
                    className="w-9 h-9 rounded-full mr-3"
                  />
                  Shane Doe · Sep 8, 2022
                </div>
                <p className="text-gray-700">
                  To understand the new smart watches and other pro devices of
                  recent focus, we should look to Silicon Valley and the
                  quantified...
                </p>
              </div>
            </div>

            <div className="relative bg-black rounded-lg overflow-hidden h-[27rem]">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/matias-islas-Nw0j-2YAnfI-unsplash-1-1024x683.jpg"
                alt=""
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-pink-600 text-white text-xs font-semibold w-[4rem] px-2 py-1 rounded mb-2">
                  GAMING
                </div>
                <h2 className="text-white text-[2.8rem] font-bold mb-4">
                  Riot Games Acquires a Wargaming Studio to Help With Live Game
                  Development
                </h2>
                <div className="flex items-center text-white text-sm">
                  <img
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt=""
                    className="w-9 h-9 rounded-full mr-3"
                  />
                  Shane Doe · Mar 10, 2022
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md flex">
              <div className="relative w-[35%] h-[15rem] rounded-l-lg overflow-hidden">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy-gieling-bA5ZJ9JVrb8-unsplash-1-1024x651.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  GAMING
                </div>
              </div>
              <div className="p-5 flex-1">
                <h2 className="text-[1.2rem] font-bold mb-3">
                  Game Development This Week: Save On Essential Tools and More
                </h2>
                <div className="text-gray-500 text-sm mb-5 flex items-center">
                  <img
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt=""
                    className="w-9 h-9 rounded-full mr-3"
                  />
                  Shane Doe · Nov 19, 2022
                </div>
                <p className="text-gray-700">
                  To understand the new smart watches and other pro devices of
                  recent focus, we should look to Silicon Valley and the
                  quantified...
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md flex">
              <div className="relative w-[35%] h-[15rem] rounded-l-lg overflow-hidden">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bogdan-glisik-1661469-1-edited-1536x960.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  TECHNOLOGY
                </div>
              </div>
              <div className="p-5 flex-1">
                <h2 className="text-[1.2rem] font-bold mb-3">
                  Keep Talking and Nobody Explodes: A Boomer Gaming in VR
                </h2>
                <div className="text-gray-500 text-sm mb-5 flex items-center">
                  <img
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt="Author"
                    className="w-9 h-9 rounded-full mr-3"
                  />
                  Shane Doe · Mar 10, 2021
                </div>
                <p className="text-gray-700">
                  To understand the new smart watches and other pro devices of
                  recent focus, we should look to Silicon Valley and the
                  quantified...
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md flex">
              <div className="relative w-[35%] h-[15rem] rounded-l-lg overflow-hidden">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-luis-quintero-1787236-1024x683.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  TECHNOLOGY
                </div>
              </div>
              <div className="p-5 flex-1">
                <h2 className="text-[1.2rem] font-bold mb-3">
                  Apple Watch’s ECG Can Help Diagnose Heart Problem: Research
                </h2>
                <div className="text-gray-500 text-sm mb-5 flex items-center">
                  <img
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt=""
                    className="w-9 h-9 rounded-full mr-3"
                  />
                  Shane Doe · Jan 19, 2021
                </div>
                <p className="text-gray-700">
                  To understand the new smart watches and other pro devices of
                  recent focus, we should look to Silicon Valley and the
                  quantified...
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md flex">
              <div className="relative w-[35%] h-[15rem] rounded-l-lg overflow-hidden">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bruno-bueno-3854821-1024x683.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  TECHNOLOGY
                </div>
              </div>
              <div className="p-5 flex-1">
                <h2 className="text-[1.2rem] font-bold mb-3">
                  Simple Tips and Tricks to Take Care of Your Expensive DSLR
                  Camera
                </h2>
                <div className="text-gray-500 text-sm mb-5 flex items-center">
                  <img
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt=""
                    className="w-9 h-9 rounded-full mr-3"
                  />
                  Shane Doe · Mar 15, 2020
                </div>
                <p className="text-gray-700">
                  To understand the new smart watches and other pro devices of
                  recent focus, we should look to Silicon Valley and the
                  quantified...
                </p>
              </div>
            </div>

            <button
              onClick={handleLoadMore}
              className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-7 rounded-full w-[16rem] shadow-lg mt-7 mx-auto block flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "LOAD MORE"
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="w-[23%] sticky top-0 h-screen mb-[21rem] space-y-5 pr-5">
        <div className="p-5 rounded-lg shadow-md border border-gray-400">
          <h2 className="text-lg font-semibold mb-5 text-center">
            Connect With Us
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaFacebookF className="w-6 h-6 text-blue-600" />
                <div className="text-sm font-medium">1.1K Facebook</div>
              </div>
            </div>
            <div className="flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaTwitter className="w-6 h-6 text-blue-400" />
                <div className="text-sm font-medium">68.9K Twitter</div>
              </div>
            </div>
            <div className="flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaPinterestP className="w-6 h-6 text-red-600" />
                <div className="text-sm font-medium">10.7K Pinterest</div>
              </div>
            </div>
            <div className="flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaInstagram className="w-6 h-6 text-pink-600" />
                <div className="text-sm font-medium">46.4K Instagram</div>
              </div>
            </div>
            <div className="flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaTelegramPlane className="w-6 h-6 text-blue-500" />
                <div className="text-sm font-medium">Telegram</div>
              </div>
            </div>
            <div className="flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="w-6 h-6 text-green-500" />
                <div className="text-sm font-medium">WhatsApp</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-5">Gaming Zone</h2>
          <div className="space-y-4">
            <div>
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422755408_xl-2015-1-1024x512.jpg"
                alt=""
                className="w-full h-auto rounded-lg object-cover mb-2"
              />
              <div className="absolute bottom-[10.8rem] left-[1rem] bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded">
                GAMING
              </div>
              <h3 className="text-sm font-bold">
                PS5 vs Xbox Series XS vs Switch Launch Sales Comparison
              </h3>
              <div className="text-xs text-gray-500 mt-1">
                Shane Doe · Sep 8, 2020
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="text-sm font-medium">
                    New Oculus VR Kills IRL If Your Game Character Dies
                  </h4>
                  <div className="text-xs text-gray-500">
                    Shane Doe · Apr 18, 2020
                  </div>
                </div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/man-with-glasses-of-virtual-reality-nominated_t20_ZYvEBR.jpg"
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="text-sm font-medium">
                    Hologate VR Serves Its Five Millionth Customer
                  </h4>
                  <div className="text-xs text-gray-500">
                    Shane Doe · Mar 16, 2020
                  </div>
                </div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bruno-bueno-3854821-1024x683.jpg"
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="text-sm font-medium">
                    The Nintendo Switch Can’t Seem To Handle Pokémon
                  </h4>
                  <div className="text-xs text-gray-500">
                    Shane Doe · Mar 15, 2020
                  </div>
                </div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/yasin-hasan-PU1uYnZrAL0-unsplash-1024x683.jpg"
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="text-sm font-medium">
                    The Fujifilm X-T30 is the Perfect Camera for Gaming
                  </h4>
                  <div className="text-xs text-gray-500">
                    Shane Doe · Mar 15, 2020
                  </div>
                </div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/puria-berenji-tUnzh_uINw0-unsplash-1152x1536.jpg"
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
