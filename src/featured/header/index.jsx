import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaVimeo,
} from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import SideBar from "../../components/SideBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-black dark:bg-gray-900">
        <div className="bg-black text-white p-2">
          <div className="flex justify-between items-center max-w-screen-xl mx-auto">
            <div className="flex items-center space-x-4 pl-4 md:pl-24 text-sm">
              <Link to="/start-here">Start Here</Link>
              <Link to="/demos">Demos</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/buy-now">Buy Now</Link>
            </div>
            <div className="flex items-center space-x-2 pr-4 md:pr-24">
              <Link to="/facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </Link>
              <Link to="/twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </Link>
              <Link to="/instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </Link>
              <Link to="/pinterest" target="_blank" rel="noopener noreferrer">
                <FaPinterest />
              </Link>
              <Link to="/vimeo" target="_blank" rel="noopener noreferrer">
                <FaVimeo />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:justify-center gap-4 md:gap-[6rem] p-4 border-b bg-white">
          <div className="flex items-center">
            <button className="mr-4 text-[1.5rem]" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <Link to="/" className="text-2xl font-bold">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png"
                alt="Logo"
                className="h-8"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4 text-bold">
            <Link className="font-bold" to="/">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center font-bold ">
                Features <span className="ml-1 ">&#9662;</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white w-[15rem] h-[40rem] p-4 rounded shadow-lgn z-50">
                <Link to="/feature1" className="block p-1">
                  50+ Unique Demos
                </Link>
                <Link to="/feature2" className="block p-1">
                  Post Styles
                </Link>
                <Link to="/feature1" className="block p-1">
                  Category Layouts
                </Link>
                <Link to="/feature2" className="block p-1">
                  Header Styles
                </Link>
                <Link to="/feature1" className="block p-1">
                  Homepage styles
                </Link>
                <Link to="/feature2" className="block p-1">
                  Featured grids
                </Link>
                <Link to="/feature1" className="block p-1">
                  12+ Premium widgets
                </Link>
                <Link to="/feature1" className="block p-1">
                  Category Layouts
                </Link>
                <Link to="/feature2" className="block p-1">
                  Header Styles
                </Link>
                <Link to="/feature1" className="block p-1">
                  Homepage styles
                </Link>
                <Link to="/feature2" className="block p-1">
                  Featured grids
                </Link>
                <Link to="/feature1" className="block p-1">
                  12+ Premium widgets
                </Link>
                <Link to="/feature2" className="block p-1">
                  Header Styles
                </Link>
                <Link to="/feature1" className="block p-1">
                  Homepage styles
                </Link>
                <Link to="/feature2" className="block p-1">
                  Featured grids
                </Link>
                <Link to="/feature1" className="block p-1">
                  12+ Premium widgets
                </Link>
                <Link to="/feature1" className="block p-1">
                  Homepage styles
                </Link>
                <Link to="/feature2" className="block p-1">
                  Featured grids
                </Link>
                <Link to="/feature1" className="block p-1">
                  12+ Premium widgets
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center font-bold">
                Technology <span className="ml-1">&#9662;</span>
              </button>
            </div>
            <Link className="font-bold" to="/gadgets">
              Gadgets
            </Link>
            <Link className="font-bold" to="/phones">
              Phones
            </Link>
            <Link className="font-bold" to="/buy-theme">
              Buy Theme
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              to="/subscribe"
              className="btn w-[100px] bg-[#3c3fde] text-center text-white font-bold p-2 rounded-lg hover:bg-black"
            >
              Subscribe
            </Link>
            <IoMoonOutline />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
      </header>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
