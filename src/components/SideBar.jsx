import React from 'react';
import { FaTimes } from 'react-icons/fa';


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 w-[320px] bg-black text-white h-full z-50 p-4">
            <button onClick={toggleSidebar} className='flex justify-end mb-4'>
              <FaTimes />
            </button>
            <div className="flex items-center space-x-2 mb-4">
             
              <div className="text-lg font-bold">
                <img className='w-[150px] flex' src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png" alt="" />
              </div>
            </div>
            <div className="bg-black border p-4 rounded-md h-[22rem] flex flex-col justify-center">
              <h2 className="text-lg font-bold mb-2">Subscribe to Updates</h2>
              <p className="text-sm mb-4">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <input
                type="email"
                className="w-full p-2 mb-4 text-black rounded-md"
                placeholder="Your email address.."
              />
              <button className="w-full bg-[#3c3fde] hover:bg-black p-2 rounded-md">SUBSCRIBE</button>
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs">By signing up, you agree to the our terms and our Privacy Policy agreement.</span>
              </div>
            </div>
            <nav className="mt-4 space-y-2">
              <h2 className="font-bold text-lg">WHAT'S HOT</h2>
             
              <div className="flex items-center mt-4">
                <img src="https://via.placeholder.com/50" alt="Hot news" className="w-12 h-12 rounded-md mr-4" />
                <div>
                  <p className="text-sm font-bold">Game Development This Week: Save On Essential Tools and More</p>
                  <span className="text-xs text-gray-400">Nov 19, 2022</span>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <img src="https://via.placeholder.com/50" alt="Hot news" className="w-12 h-12 rounded-md mr-4" />
                <div>
                  <p className="text-sm font-bold">Is the Hyperloop Doomed? What Elon Musk's Latest Setback Really Means</p>
                  <span className="text-xs text-gray-400">Mar 10, 2022</span>
                </div>
              </div>
               <div className="flex items-center mt-4">
                <img src="https://via.placeholder.com/50" alt="Hot news" className="w-12 h-12 rounded-md mr-4" />
                <div>
                  <p className="text-sm font-bold">Is the Hyperloop Doomed? What Elon Musk's Latest Setback Really Means</p>
                  <span className="text-xs text-gray-400">Mar 10, 2022</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
