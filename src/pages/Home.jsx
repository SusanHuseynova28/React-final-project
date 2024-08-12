import React, { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa";
import CardList from "../components/CardList";
import VideoCards from "../components/VideoCard";
import Banner from "../components/Advertisement1";
import ScrollCard from "../components/ScrollCard";
import Banner2 from "../components/Advertisment2";
import HighlightedReview from "../components/Advertesment3";
import RecentPosts from "../components/ScrollCard2";
import MyCRUDApp from "../components/crudcard";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch("http://localhost:3000/cards");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div className="home-container flex justify-center items-center gap-4 mt-10 pl-10">
        <div className="w-[60%]">
          <div className="relative mb-5">
            <div className="relative overflow-hidden w-[98%] h-[32rem] rounded-lg">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
                alt="Main Article"
                className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-lg"
              />
            </div>

            <div className="absolute bottom-5 left-5 p-2.5 rounded text-white w-[80%]">
              <div>
                <span className="bg-fuchsia-600 px-2 py-1 rounded text-sm font-semibold">
                  GADGETS
                </span>
              </div>
              <h1 className="text-2xl font-bold my-2 bg-black p-3 w-[33rem]">
                Save $25 on Philips Wired Headphone For A
              </h1>
              <h1 className="text-2xl font-bold my-2 bg-black p-3 w-[28rem]">
                Great Sounding Over-Ear Headphone
              </h1>
              <div className="flex items-center">
                <img
                  src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                  alt="Author"
                  className="rounded-full w-[21px] h-[21px] mr-2"
                />
                <div className="flex flex-row text-sm gap-2">
                  <span>Shane Doe</span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-1" /> Jan 12, 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[96%] flex justify-between gap-4">
            <div className="w-1/2 h-[24rem] bg-white rounded-lg overflow-hidden shadow-md mr-2.5 relative mt-4">
              <div className="relative">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg"
                  alt="Article"
                  className="w-full h-[14rem] rounded-lg "
                />
                <span className="bg-blue-700 px-3 py-1 text-white rounded text-sm font-semibold absolute bottom-0 left-4">
                  TECHNOLOGY
                </span>
              </div>
              <div className="p-2.5">
                <h2 className="text-lg font-bold my-2 p-2">
                  Tablet PC Market to Witness Exponential Growth by 2028,
                  Sources Say
                </h2>
                <div className="flex items-center">
                  <div className="flex flex-row text-sm p-2 gap-2">
                    <span>Shane Doe</span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-1" /> Jan 11, 2020
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-[24rem] bg-white rounded-lg overflow-hidden shadow-md mr-2.5 relative mt-4">
              <div className="relative">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg"
                  alt="Article"
                  className="w-full h-[14rem] rounded-lg "
                />
                <span className="bg-blue-700 px-3 py-1 text-white rounded text-sm font-semibold absolute bottom-0 left-4">
                  TECHNOLOGY
                </span>
              </div>
              <div className="p-2.5">
                <h2 className="text-lg font-bold my-2 p-2">
                  Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy
                  Talks
                </h2>
                <div className="flex items-center">
                  <div className="flex flex-row text-sm p-2 gap-2">
                    <span>Shane Doe</span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-1" /> Jan 11, 2020
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-4">People's Favorite</h2>
          <div className="mb-5 flex">
            <div className="flex justify-between">
              <div>
                <span className="rounded text-[0.7rem] font-bold h-[2rem] text-blue-700">
                  TECHNOLOGY
                </span>
                <h3 className="text-lg font-bold my-2 w-[15rem]">
                  Schools, Parents Disagree over Bans on Student Mobile Phones
                </h3>
                <div className="flex">
                  <div className="flex flex-row gap-4 text-sm">
                    <span>Shane Doe</span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-1" /> 6 Mins Read
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-450x287.jpg"
                  alt="Author"
                  className="w-[100px] rounded-full h-[100px] ml-4 mt-6"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 flex">
            <div className="flex justify-between">
              <div>
                <span className="text-fuchsia-600 rounded text-[0.8rem] font-bold h-[2rem]">
                  Gadgets
                </span>
                <h3 className="text-lg font-bold my-2 w-[15rem]">
                  PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More
                </h3>
                <div className="flex">
                  <div className="flex flex-row gap-4 text-sm">
                    <span>Shane Doe</span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-1" /> 6 Mins Read
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-450x267.jpg"
                  alt="Author"
                  className="w-[100px] rounded-full h-[100px] ml-4 mt-6"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 flex">
            <div className="flex justify-between">
              <div>
                <span className="rounded text-[0.7rem] font-bold h-[2rem] text-blue-700">
                  TECHNOLOGY
                </span>
                <h3 className="text-lg font-bold my-2 w-[15rem]">
                  Electric Car Owners to Pay Road Tax from 2025, Hunt Announces
                </h3>
                <div className="flex">
                  <div className="flex flex-row gap-4 text-sm">
                    <span>Shane Doe</span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-1" /> 6 Mins Read
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-300x200.jpg"
                  alt="Author"
                  className="w-[100px] rounded-full h-[100px] ml-4 mt-6"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 flex">
            <div className="flex justify-between">
              <div>
                <span className="rounded text-[0.8rem] font-bold h-[2rem] text-teal-500">
                  Phones
                </span>
                <h3 className="text-lg font-bold my-2 w-[15rem]">
                  Tackling Smartphone Addiction: Village Bans Mobiles for Minors
                </h3>
                <div className="flex">
                  <div className="flex flex-row gap-4 text-sm">
                    <span>Shane Doe</span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-1" /> 6 Mins Read
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-450x287.jpg"
                  alt="Author"
                  className="w-[100px] rounded-full h-[100px] ml-4 mt-6"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 flex">
            <div className="flex justify-between">
              <div>
                <span className="rounded text-[0.7rem] font-bold h-[2rem] text-blue-700">
                  TECHNOLOGY
                </span>
                <h3 className="text-lg font-bold my-2 w-[15rem]">
                  Epic Games Store Gives Away One of The Best VR Games
                </h3>
                <div className="flex">
                  <div className="flex flex-row gap-4 text-sm">
                    <span>Shane Doe</span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-1" /> 6 Mins Read
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg"
                  alt="Author"
                  className="w-[100px] rounded-full h-[100px] ml-4 mt-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Banner />
        <div className="font-bold text-3xl text-center">Editor's Picks</div>
      </div>

      <CardList cards={data} />
      <VideoCards />
      <ScrollCard/>
      <Banner2 />
      <HighlightedReview />
      <MyCRUDApp />
      <RecentPosts />
    </>
  );
};

export default Home;