import React from "react";

const ScrollCard = () => {
  return (
    <div className="container px-4 flex justify-center items-center mt-[3rem] mb-[11rem]">
      <div className="flex-1 pr-6">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold ml-4">New Gadgets</h2>
              <button className="text-black mr-4">See All</button>
            </div>
            <div className="bg-white p-4 rounded-lg  flex">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg"
                alt="Gadget"
                className="w-[27rem] h-[17rem] rounded-lg object-cover"
              />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-6">
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
                  <h4 className="text-lg font-semibold hover:text-blue-700 cursor-pointer">
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
              <h2 className="text-2xl font-semibold">Phones & Tech</h2>
              <button className="text-blue-500">See All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="your-image-url-here"
                  alt="Phone"
                  className="w-full rounded-lg object-cover"
                />
                <h4 className="text-lg font-semibold mt-2">
                  Google Says Surveillance Vendor Targeted Samsung Phones
                </h4>
                <p className="text-gray-500 text-sm">
                  Shane Doe · Jan 14, 2021
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="your-image-url-here"
                  alt="Phone"
                  className="w-full rounded-lg object-cover"
                />
                <h4 className="text-lg font-semibold mt-2">
                  Why Are iPhones More Expensive Than Android Phones?
                </h4>
                <p className="text-gray-500 text-sm">
                  Shane Doe · Jan 14, 2021
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center">
                <img
                  src="your-image-url-here"
                  alt="Phone"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
                    The Pros of Buying a Used/Refurbished iPhone 11
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 14, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="your-image-url-here"
                  alt="Phone"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
                    These OnePlus Phones Are Getting Stable Android 13 Update
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 13, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="your-image-url-here"
                  alt="Phone"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
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
                  src="your-image-url-here"
                  alt="Phone"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
                    Redmi Series Launched With 200MP Camera and a Fast Charging
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 13, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="your-image-url-here"
                  alt="Phone"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
                    The Best Wireless Earbuds for the Samsung Galaxy S22 in 2022
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Shane Doe · Jan 14, 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="your-image-url-here"
                  alt="Phone"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
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

      
      <div className="w-1/5 sticky top-0 h-screen space-y-8">
      
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Subscribe to Updates</h2>
          <form>
            <input
              type="email"
              className="w-full mb-4 p-2 border rounded"
              placeholder="Your email address..."
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-2">
            By signing up, you agree to the terms and our Privacy Policy
            agreement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Popular Now</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">1</span>
              <div>
                <a
                  href="/"
                  className="text-blue-500 text-sm font-semibold line-clamp-2"
                >
                  Popular New Xbox Game Pass Game Being Review Bombed With “0s”
                </a>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 14, 2021 · 7,792 Views
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">2</span>
              <div>
                <a
                  href="/"
                  className="text-blue-500 text-sm font-semibold line-clamp-2"
                >
                  Samsung is Developing Bright MicroLED on Displays for AR
                  Headsets
                </a>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 14, 2021 · 6,914 Views
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">3</span>
              <div>
                <a
                  href="/"
                  className="text-blue-500 text-sm font-semibold line-clamp-2"
                >
                  Warner Bros. Games Announces Mortal Kombat: Onslaught
                </a>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 14, 2021 · 4,418 Views
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">4</span>
              <div>
                <a
                  href="/"
                  className="text-blue-500 text-sm font-semibold line-clamp-2"
                >
                  Super League Gaming now Publisher of Roblox Anime
                  Battlegrounds
                </a>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 14, 2021 · 1,013 Views
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">5</span>
              <div>
                <a
                  href="/"
                  className="text-blue-500 text-sm font-semibold line-clamp-2"
                >
                  Hologate Announces New Plans for First Large Format World VR
                  Arcade
                </a>
                <p className="text-gray-500 text-xs">
                  Shane Doe · Jan 16, 2021 · 798 Views
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
