import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 w-[320px] bg-black text-white h-full z-50 p-4 sidebar">
            <button
              onClick={toggleSidebar}
              className="mb-4 pl-[16rem] text-2xl"
            >
              <FaTimes />
            </button>
            <div className="flex justify-center space-x-2 mb-4">
              <div className="text-lg font-bold">
                <img
                  className="w-[145px] w-full flex justify-center items-center"
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="bg-black border p-4 rounded-md h-[22rem] flex flex-col justify-center mt-10">
              <h2 className="text-lg font-bold mb-2">Subscribe to Updates</h2>
              <p className="text-sm mb-4">
                Get the latest creative news from FooBar about art, design and
                business.
              </p>
              <input
                type="email"
                className="w-full p-2 mb-4 text-black rounded-md bg-black"
                placeholder="Your email address.."
              />
              <button className="w-full bg-[#3c3fde] hover:bg-black p-2 rounded-md">
                SUBSCRIBE
              </button>
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs">
                  By signing up, you agree to our terms and our Privacy Policy
                  agreement.
                </span>
              </div>
            </div>
            <nav className="mt-4 space-y-2">
              <h2 className="font-bold text-lg">WHAT'S HOT</h2>
              <div className="flex items-center mt-4">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-150x100.jpg"
                  alt="Hot news"
                  className="w-12 h-12 rounded-md mr-4"
                />
                <div>
                  <p className="text-sm font-bold">
                    Game Development This Week: Save On Essential Tools and More
                  </p>
                  <span className="text-xs text-gray-400">Nov 19, 2022</span>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-450x256.jpg"
                  alt="Hot news"
                  className="w-12 h-12 rounded-md mr-4"
                />
                <div>
                  <p className="text-sm font-bold">
                    Is the Hyperloop Doomed? What Elon Musk's Latest Setback
                    Really Means
                  </p>
                  <span className="text-xs text-gray-400">Mar 10, 2022</span>
                </div>
              </div>
              <div className="flex items-center ">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg"
                  alt="Hot news"
                  className="w-12 h-12 rounded-md mr-4"
                />
                <div>
                  <p className="text-sm font-bold">
                    Is the Hyperloop Doomed? What Elon Musk's Latest Setback
                    Really Means
                  </p>
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
