import React from 'react';
import { FaRegClock } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container flex justify-between p-5 mt-[10rem]">
      <div className="main-content flex-3 mr-5">
        <div className="main-article relative mb-5">
          <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg" alt="Main Article" className="w-full h-auto rounded-lg" />
          <div className="article-details absolute bottom-5 left-5 bg-black bg-opacity-60 p-2.5 rounded text-white">
            <span className="bg-purple-700 px-2 py-1 rounded text-sm font-bold">GADGETS</span>
            <h1 className="text-xl font-bold my-2">Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone</h1>
            <div className="flex items-center">
              <img src="https://source.unsplash.com/random/40x40" alt="Author" className="rounded-full mr-2" />
              <div className="flex flex-col text-sm">
                <span>Shane Doe</span>
                <span className="flex items-center"><FaRegClock className="mr-1" /> Jan 12, 2020</span>
              </div>
            </div>
          </div>
        </div>
        <div className="other-articles flex justify-between">
          <div className="article-card w-1/2 bg-white rounded-lg overflow-hidden shadow-md mr-2.5">
            <img src="https://source.unsplash.com/random/400x300" alt="Article" className="w-full h-auto" />
            <div className="p-2.5">
              <span className="bg-blue-700 px-2 py-1 rounded text-sm font-bold">TECHNOLOGY</span>
              <h2 className="text-lg font-bold my-2">Tablet PC Market to Witness Exponential Growth by 2028, Sources Say</h2>
              <div className="flex items-center">
                <img src="https://source.unsplash.com/random/40x40" alt="Author" className="rounded-full mr-2" />
                <div className="flex flex-col text-sm">
                  <span>Shane Doe</span>
                  <span className="flex items-center"><FaRegClock className="mr-1" /> Jan 11, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className="article-card w-1/2  rounded-lg overflow-hidden shadow-md ml-2.5">
            <img src="https://source.unsplash.com/random/400x300" alt="Article" className="w-full h-auto" />
            <div className="p-2.5">
              <span className="bg-blue-700 px-2 py-1 rounded text-sm font-bold">TECHNOLOGY</span>
              <h2 className="text-lg font-bold my-2">Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks</h2>
              <div className="flex items-center">
                <img src="https://source.unsplash.com/random/40x40" alt="Author" className="rounded-full mr-2" />
                <div className="flex flex-col text-sm">
                  <span>Shane Doe</span>
                  <span className="flex items-center"><FaRegClock className="mr-1" /> Jan 11, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar flex-1">
        <h2 className="text-2xl font-bold mb-5">People's Favorite</h2>
        <div className="sidebar-article mb-5 flex">
          <div className="flex-1">
            <span className="bg-blue-700 px-2 py-1 rounded text-sm font-bold">TECHNOLOGY</span>
            <h3 className="text-lg font-bold my-2">Schools, Parents Disagree over Bans on Student Mobile Phones</h3>
            <div className="flex items-center">
              <img src="https://source.unsplash.com/random/40x40" alt="Author" className="rounded-full mr-2" />
              <div className="flex flex-col text-sm">
                <span>Shane Doe</span>
                <span className="flex items-center"><FaRegClock className="mr-1" /> 6 Mins Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-article mb-5 flex">
          <div className="flex-1">
            <span className="bg-purple-700 px-2 py-1 rounded text-sm font-bold">GADGETS</span>
            <h3 className="text-lg font-bold my-2">PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More</h3>
            <div className="flex items-center">
              <img src="https://source.unsplash.com/random/40x40" alt="Author" className="rounded-full mr-2" />
              <div className="flex flex-col text-sm">
                <span>Shane Doe</span>
                <span className="flex items-center"><FaRegClock className="mr-1" /> 6 Mins Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-article mb-5 flex">
          <div className="flex-1">
            <span className="bg-blue-700 px-2 py-1 rounded text-sm font-bold">TECHNOLOGY</span>
            <h3 className="text-lg font-bold my-2">Electric Car Owners to Pay Road Tax from 2025, Hunt Announces</h3>
            <div className="flex items-center">
              <img src="https://source.unsplash.com/random/40x40" alt="Author" className="rounded-full mr-2" />
              <div className="flex flex-col text-sm">
                <span>Shane Doe</span>
                <span className="flex items-center"><FaRegClock className="mr-1" /> 6 Mins Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-article mb-5 flex">
          <div className="flex-1">
            <span className="bg-green-700 px-2 py-1 rounded text-sm font-bold">PHONES</span>
            <h3 className="text-lg font-bold my-2">Tackling Smartphone Addiction: Village Bans Mobiles for Minors</h3>
            <div className="flex items-center">
              <img src="https://source.unsplash.com/random/40x40" alt="Author" className="rounded-full mr-2" />
              <div className="flex flex-col text-sm">
                <span>Shane Doe</span>
                <span className="flex items-center"><FaRegClock className="mr-1" /> 6 Mins Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-article mb-5 flex">
          <div className="flex-1">
            <span className="bg-blue-700 px-2 py-1 rounded text-sm font-bold">TECHNOLOGY</span>
            <h3 className="text-lg font-bold my-2">Epic Games Store Gives Away One of The Best VR Games</h3>
            <div className="flex items-center">
              <img src="https://source.unsplash.com/random/40x40" alt="Author" className="rounded-full mr-2" />
              <div className="flex flex-col text-sm">
                <span>Shane Doe</span>
                <span className="flex items-center"><FaRegClock className="mr-1" /> 6 Mins Read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
