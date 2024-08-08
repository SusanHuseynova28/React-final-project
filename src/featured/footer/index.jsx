import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-20">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4 pl-4">Most Popular</h2>
            <ul>
              <li className="flex items-center my-4 bg-black p-4 rounded-lg">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-1024x683.jpg" alt="" className="w-28 h-20 mr-4 rounded-lg" />
                <div>
                  <p className="block text-base font-bold leading-tight hover:text-blue-500">Popular New Xbox Game Pass Game Being Review Bombed With “Os”</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <span className="mr-2">Jan 14, 2021</span>
                    <span className="text-red-500">7,792 Views</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center my-4 bg-black p-4 rounded-lg">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/jonathan-kemper-poSms2EzfNY-unsplash-1024x683.jpg" alt="" className="w-28 h-20 mr-4 rounded-lg" />
                <div>
                  <p className="block text-base font-bold leading-tight hover:text-blue-500">Samsung is Developing Bright MicroLED on Displays for AR Headsets</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <span className="mr-2">Jan 14, 2021</span>
                    <span className="text-red-500">6,914 Views</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center my-4 bg-black p-4 rounded-lg">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/0247d91565b69ed9ddba4ec59ac97963-1-1024x585.jpg" alt="" className="w-28 h-20 mr-4 rounded-lg" />
                <div>
                  <p className="block text-base font-bold leading-tight hover:text-blue-500">Warner Bros. Games Announces Mortal Kombat: Onslaught</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <span className="mr-2">Jan 14, 2021</span>
                    <span className="text-red-500">4,418 Views</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4 pl-4">Our Picks</h2>
            <ul>
              <li className="flex items-center my-4 bg-black p-4 rounded-lg">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-1024x683.jpg" alt="" className="w-28 h-20 mr-4 rounded-lg" />
                <div>
                  <p className="block text-base font-bold leading-tight hover:text-blue-500">Game Development This Week: Save On Essential Tools and More</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <span className="mr-2">Nov 19, 2022</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center my-4 bg-black p-4 rounded-lg">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1024x582.jpg" alt="" className="w-28 h-20 mr-4 rounded-lg" />
                <div>
                  <p className="block text-base font-bold leading-tight hover:text-blue-500">Is the Hyperloop Doomed? What Elon Musk's Latest Setback Really Means</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <span className="mr-2">Mar 10, 2022</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center my-4 bg-black p-4 rounded-lg">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-1024x683.jpg" alt="" className="w-28 h-20 mr-4 rounded-lg" />
                <div>
                  <p className="block text-base font-bold leading-tight hover:text-blue-500">The Best Early Black Friday Deals on Gaming Laptops and Accessories</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <span className="mr-2">Mar 10, 2022</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <form className="bg-black border p-8 rounded-lg mt-4 md:mt-0">
              <h2 className="text-lg font-bold mb-4">Subscribe to Updates</h2>
              <p className="text-gray-400 mb-6">Get the latest creative news from FooBar about art, design and business.</p>
              <input type="email" placeholder="Your email address.." className="w-full p-4 rounded bg-gray-800 h-[3.1rem] text-white placeholder-gray-500 border border-gray-700 mb-4" />
              <button type="submit" className="w-full bg-blue-700 h-[3.1rem] text-bold text-white p-4 rounded hover:bg-black">SUBSCRIBE</button>
              <div className="flex items-center mt-4">
                <input type="checkbox" className="mr-2" />
                <p className="text-gray-400 text-xs">By signing up, you agree to the our terms and our <span className="text-white underline hover:text-blue-500">Privacy Policy</span> agreement.</p>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4 bg-black p-4 rounded-lg">
          <button className="bg-gray-800 p-4 rounded-full hover:text-blue-500">
            <FaFacebook className="text-white text-xl cursor-pointer hover:text-blue-500" />
          </button>
          <button className="bg-gray-800 p-4 rounded-full hover:text-blue-500">
            <FaTwitter className="text-white text-xl cursor-pointer hover:text-blue-500" />
          </button>
          <button className="bg-gray-800 p-4 rounded-full hover:text-blue-500">
            <FaInstagram className="text-white text-xl cursor-pointer hover:text-blue-500" />
          </button>
          <button className="bg-gray-800 p-4 rounded-full hover:text-blue-500">
            <FaPinterest className="text-white text-xl cursor-pointer hover:text-blue-500" />
          </button>
        </div>
        <div className="text-center mt-8">
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 font-bold">
            <span className="hover:text-blue-500 cursor-pointer">Home</span>
            <span className="hover:text-blue-500 cursor-pointer">Phones</span>
            <span className="hover:text-blue-500 cursor-pointer">About</span>
            <span className="hover:text-blue-500 cursor-pointer">Contact</span>
          </div>
          <p className="mt-4 text-gray-400">&copy; 2024 ThemeSphere. Designed by ThemeSphere.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;