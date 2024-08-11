import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Link } from "react-router-dom";
const ScrollCard = () => {
  return (
    <div className="container  flex justify-center items-center mt-[3rem] mb-[11rem] ">
      <div className="flex-1 pr-6">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold ml-[3.5rem]">
                New Gadgets
              </h2>
              <hr className="flex-1 mx-4 border-gray-300" />
              <button className="text-black mr-4 px-4 py-2 border rounded-xl">
                See All
              </button>
            </div>
            <div className="relative p-10 rounded-lg flex m-4">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg"
                alt="Gadget"
                className="w-[27rem] h-[17rem] rounded-lg object-cover"
              />
              <div className="absolute mt-[15.5rem] left-10 top-9 bg-[#ab07ab] text-white text-sm font-semibold px-3 py-1 rounded">
                Gadgets
              </div>
              <div className="ml-4 mt-10">
                <h3 className="text-2xl font-bold mb-2 w-[28rem] hover:text-blue-700 cursor-pointer">
                  Oculus Founder Makes a VR Headset That Can Literally Kill You
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Shane Doe · Jan 13, 2021
                </p>
                <p className="text-gray-700 mb-4 w-[24rem]">
                  To understand the new smart watches and other pro devices of
                  recent focus, we should...
                </p>
                <a href="/" className="text-blue-500 font-semibold">
                  Read More
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-10 m-4">
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422797426_xl-2015-1-300x199.jpg"
                  alt="Gadget"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold w-[17rem] hover:text-blue-700 cursor-pointer">
                    Braun Series 7 Electric Shaver Review: Quality at a Good
                    Price
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 13, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_443469058_xl-2015-1-300x203.jpg"
                  alt="Gadget"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold hover:text-blue-700 cursor-pointer  w-[20rem]">
                    Google Pixel 7, iPhone 14 Compared: Check Out 5 Major
                    Differences
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 13, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/laurens-derks-h0tMHMyfr9A-unsplash-300x199.jpg"
                  alt="Gadget"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold hover:text-blue-700 cursor-pointer w-[15rem]">
                    Why Apple Should Skip The MacBook Pro Launch
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 12, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_430988634_xl-2015-4-300x208.jpg"
                  alt="Gadget"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold hover:text-blue-700 cursor-pointer">
                    Apollo G2J Showcases Electric Sports Car
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 12, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-450x287.jpg"
                  alt="Gadget"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold hover:text-blue-700 cursor-pointer w-[18rem]">
                    The Famous Dyson Bladeless Fan is On Sale at Walmart
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 12, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-300x201.jpg"
                  alt="Gadget"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold hover:text-blue-700 cursor-pointer">
                    Best Luxury Hotels In Bogotá 2022
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 12, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold pl-10 mt-2">
                Phones & Tech
              </h2>
              <hr className="flex-1 mx-4 border-gray-300" />
              <button className="text-black mr-4 px-4 py-2 border rounded-xl">
                See All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-10">
              <div className="relative rounded-lg overflow-hidden w-[25.5rem] h-[20rem]">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_352742574_xl-2015-1-1024x683.jpg"
                  alt="Phone"
                  className="w-full rounded-lg object-cover h-[23rem]"
                />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="absolute top-2 left-4 bg-[#009b9b] text-white text-xs font-semibold px-2 py-1 rounded mt-4">
                    PHONES
                  </div>
                  <h4 className="text-lg font-semibold text-white bg-black p-2 mt-10 w-[18rem]">
                    Google Says Surveillance Vendor
                  </h4>
                  <h4 className="text-lg font-semibold text-white bg-black p-2 mt-2 w-[15rem]">
                    Targeted Samsung Phones
                  </h4>
                  <p className="text-gray-300 text-sm mt-2">
                    Shane Doe · Jan 14, 2021
                  </p>
                </div>
              </div>
              <div className="relative bg-white rounded-lg overflow-hidden w-[25.5rem] h-[20rem]">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sahej-brar-6Pg2e3W1KDY-unsplash-1024x1024.jpg"
                  alt="Phone"
                  className="w-full rounded-lg object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="absolute top-2 left-4 bg-[#009b9b] text-white text-xs font-semibold px-2 py-1 rounded mb-10">
                    PHONES
                  </div>
                  <h4 className="text-lg font-semibold text-white bg-black p-2 mt-6 w-[19rem]">
                    Why Are iPhones More Expensive
                  </h4>
                  <h4 className="text-lg font-semibold text-white bg-black p-2 mt-2 w-[14rem]">
                    Than Android Phones?
                  </h4>
                  <p className="text-gray-300 text-sm mt-2">
                    Shane Doe · Jan 14, 2021
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10 ">
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-fxJIHyWTRu4-unsplash-450x302.jpg"
                  alt="Phone"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold w-[15rem]">
                    The Pros of Buying a Used/Refurbished iPhone 11
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 14, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/vinit-vispute-enqYaZPSDjQ-unsplash-1200x800.jpg"
                  alt="Phone"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold w-[18rem]">
                    These OnePlus Phones Are Getting Stable Android 13 Update
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 13, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-2ZgdviaHOkc-unsplash-2-267x300.jpg"
                  alt="Phone"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold w-[19rem]">
                    Huawei Phones Are Moving Forward Without Google Mobile
                    Services
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 13, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/ivan-shilov-D24B2DiV0sY-unsplash-300x200.jpg"
                  alt="Phone"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold w-[20rem]">
                    Redmi Series Launched With 200MP Camera and a Fast Charging
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 13, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-mP4sfCCoTrI-unsplash-1-181x300.jpg"
                  alt="Phone"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold w-[20rem]">
                    The Best Wireless Earbuds for the Samsung Galaxy S22 in 2022
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 14, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/mark-chan-489jbTi51sg-unsplash-300x169.jpg"
                  alt="Phone"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold w-[18rem]">
                    OnePlus Will Focus on a Premium Build Over Camera
                    Performance
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 14, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/5 sticky top-0 h-screen space-y-8 mb-[50rem] pr-16">
        <div className="border p-6 rounded-lg shadow-lg h-auto w-[18rem] bg-white">
          <div className="flex justify-center -mt-10 mb-4">
            <div className="bg-blue-700 text-white p-4 rounded-full">
              <SlEnvolopeLetter />
            </div>
          </div>
          <h3 className="text-black text-2xl font-bold w-full text-center">
            Subscribe to Updates
          </h3>
          <p className="text-gray-500 mt-2 text-center">
            Get the latest creative news from FooBar about art, design, and
            business.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email address.."
              className="w-full p-3 rounded border border-gray-300 text-gray-700"
            />
            <button
              type="submit"
              className="w-full bg-blue-700 font-bold text-white p-3 mt-4 rounded"
            >
              SUBSCRIBE
            </button>
            <div className="flex items-center mt-4 text-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-gray-400 text-xs">
                By signing up, you agree to the terms and our{" "}
                <a href="/" className="text-blue-700 underline">
                  Privacy Policy
                </a>{" "}
                agreement.
              </p>
            </div>
          </form>
        </div>

        <div className="p-6 rounded-lg  w-[15rem] border-gray-300 ">
          <h2 className="text-lg font-bold mb-4">Popular Now</h2>
          <ul className="space-y-4 w-[15rem]">
            <li className="flex items-start ">
              <span className="flex items-center justify-center bg-blue-500 text-white font-bold mt-[0.5rem] rounded-full w-[6.5rem] h-[2rem] mr-4">
                1
              </span>
              <div>
                <Link className="text-black text-sm font-semibold hover:text-blue-500 ">
                  Popular New Xbox Game Pass Game Being Review Bombed With “0s”
                </Link>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 14, 2021 ·
                  <span className="text-red-600 font-bold">7,792 </span>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-blue-500 text-white font-bold mt-[0.5rem] rounded-full w-[6.5rem] h-[2rem] mr-4">
                2
              </span>
              <div>
                <a
                  href="/"
                  className="text-black text-sm font-semibold hover:text-blue-500"
                >
                  Samsung is Developing Bright MicroLED on Displays for AR
                  Headsets
                </a>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 14, 2021 ·
                  <span className="text-red-600 font-bold">6,914 </span>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-blue-500 text-white mt-[0.5rem] font-bold rounded-full w-[5.5rem] h-[2rem] mr-4">
                3
              </span>
              <div>
                <a
                  href="/"
                  className="text-black text-sm font-semibold hover:text-blue-500"
                >
                  Warner Bros. Games Announces Mortal Kombat: Onslaught
                </a>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 14, 2021 ·
                  <span className="text-red-600 font-bold">4,418 </span>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-blue-500 mt-[0.5rem] text-white font-bold rounded-full w-[6.5rem] h-[2rem] mr-4">
                4
              </span>
              <div>
                <a
                  href="/"
                  className="text-black text-sm font-semibold hover:text-blue-500"
                >
                  Super League Gaming now Publisher of Roblox Anime
                  Battlegrounds
                </a>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 14, 2021 ·
                  <span className="text-red-600 font-bold">1,013 </span>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-blue-500 mt-[0.5rem] text-white font-bold rounded-full w-[6.5rem] h-[2rem] mr-4">
                5
              </span>
              <div>
                <a
                  href="/"
                  className="text-black text-sm font-semibold hover:text-blue-500"
                >
                  Hologate Announces New Plans for First Large Format World VR
                  Arcade
                </a>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 16, 2021 ·
                  <span className="text-red-600 font-bold">798 </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;
