import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { FaMoon, FaSun, FaBars, FaSearch, FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaVimeo } from 'react-icons/fa';
import SideBar from '../../components/SideBar';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <div className="bg-black text-white p-2">
          <div className="flex justify-between items-center max-w-screen-xl mx-auto">
            <div className="flex items-center space-x-4 pl-28 text-sm">
              <Link to="/start-here">Start Here</Link>
              <Link to="/demos">Demos</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/buy-now">Buy Now</Link>
            </div>
            <div className="flex items-center space-x-2">
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
        <div className=" flex justify-center gap-[6rem] p-4 border-b bg-white">
          <div className="flex items-center">
            <button className="mr-4 text-[1.5rem]" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <Link to="/" className="text-2xl font-bold">
            <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png" alt="" /></Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link to="/">Home</Link>
            <div className="relative group">
              <button className="flex items-center">
                Features <span className="ml-1">&#9662;</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-900 p-2 rounded shadow-lg">
                <Link to="/feature1" className="block p-1">Feature 1</Link>
                <Link to="/feature2" className="block p-1">Feature 2</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center">
                Technology <span className="ml-1">&#9662;</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-900 p-2 rounded shadow-lg">
                <Link to="/tech1" className="block p-1">Tech 1</Link>
                <Link to="/tech2" className="block p-1">Tech 2</Link>
              </div>
            </div>
            <Link to="/gadgets">Gadgets</Link>
            <Link to="/phones">Phones</Link>
            <Link to="/buy-theme">Buy Theme</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/subscribe" className="btn btn-primary">Subscribe</Link>
            <button onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
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
