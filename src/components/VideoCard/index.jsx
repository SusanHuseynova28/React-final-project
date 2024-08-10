import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoCards = () => {
  return (
    <div className="bg-[#0A0A23] text-white p-6 w-full mt-[24rem]  overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 ml-14 mt-4">Trending Videos</h2>
      <div className="flex mb-6 ml-[3rem] mr-[3rem]">
        <div className="w-[70%]">
          <div className="bg-gray-800 rounded-lg overflow-hidden relative mb-6 w-[80%]">
            <img
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sajad-nori-CeyE899Q73Y-unsplash-768x512.jpg"
              alt=""
              className="w-full h-[27rem] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <FaPlay className="text-white text-6xl" />
            </div>
            <div className="p-4 absolute bottom-0 left-0 w-full">
              <div className="flex items-center justify-between mb-2">
                <button className="bg-fuchsia-600 text-xs ml-2 uppercase font-semibold py-1 px-2 rounded">
                  Gadgets
                </button>
              </div>
              <div className=" bg-opacity-60 p-2 rounded w-fit">
                <h3 className="bg-black text-2xl font-bold mb-2 p-2">
                  Soundcore VR Gaming Earbuds Designed for</h3>
                <h3 className="bg-black text-2xl font-bold p-2 w-[20rem] ">Meta Quest 2 Launched</h3>
              </div>
              <div className="text-white mt-2 flex gap-2">
                <img
                  src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                  className="w-6 h-6 rounded-full ml-2  "
                />
                <span>Shane Doe</span> • <span>Sep 20, 2020</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 w-[75rem]">
            {[
              {
                id: 2,
                img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/billy-freeman-yk-jzxSIk90-unsplash-450x253.jpg",
                title: "Leaf Headphones: Here are Some of the Best Devices...",
                date: "Sep 17, 2020",
              },
              {
                id: 3,
                img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/nasa-Zzc0vZE2JZI-unsplash-450x350.jpg",
                title:
                  "A Piece of The Wrecked 1986 Challenger Space Shuttle Recovered from the Atlantic",
                date: "Sep 15, 2020",
              },
              {
                id: 4,
                img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_314150492_xl-2015-1-768x361.jpg",
                title:
                  "Security Cameras Make Us Feel Safe, but Are They Effective?",
                date: "Sep 14, 2020",
              },
              {
                id: 5,
                img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pragyan-goswami-GziKHv-3lVc-unsplash-450x315.jpg",
                title: "This Bedside Table Lamp Will Light Up Your World...",
                date: "Sep 13, 2020",
              },
            ].map(({ id, img, title, date }) => (
              <div
                key={id}
                className="relative flex felx-col items-center h-[16rem] w-full"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-[70%]  object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-7 w-[80%]  bg-black p-2">
                  <h3 className="text-sm font-bold line-clamp-2 ">{title}</h3>
                  <div className="text-gray-400 text-xs mt-1">
                    <span>Shane Doe</span> • <span>{date}</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlay className="text-white text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[28%] pr-[3rem] flex flex-col space-y-4 pr-[3rem]">
          {[
            {
              id: 6,
              img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-1024x683.jpg",
              title:
                "Photography: Save $800 on a Fujifilm Camera Before Black Friday",
              date: "Sep 12, 2020",
            },
            {
              id: 7,
              img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-1024x683.jpg",
              title:
                "Wireless Earbuds May Help Amplify Sound for People with Hearing Loss",
              date: "Sep 11, 2020",
            },
            {
              id: 8,
              img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sahej-brar-6Pg2e3W1KDY-unsplash-1024x1024.jpg",
              title:
                "Google Play Store Will Ask You to Update Apps if they Crash",
              date: "Sep 10, 2020",
            },
            {
              id: 9,
              img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-1024x686.jpg",
              title:
                "Does The Budget-Friendly PICO 4 VR Headset Live Up To The Hype?",
              date: "Sep 9, 2020",
            },
          ].map(({ id, img, title, date }) => (
            <div
              key={id}
              className="relative bg-transparent rounded-md overflow-hidden flex items-center h-[6rem]"
            >
              <div className="flex-1 ml-2">
                <h3 className="text-sm font-bold line-clamp-2 cursor-pointer hover:text-blue-700">{title}</h3>
                <div className="text-gray-400 text-xs mt-1">
                  <span>Shane Doe</span> • <span>{date}</span>
                </div>
              </div>
              <div className="relative w-24 h-24 ml-2">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover rounded-l"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlay className="text-white text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
