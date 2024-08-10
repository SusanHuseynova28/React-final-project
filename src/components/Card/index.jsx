import React from 'react';

const Card = ({ card }) => {
  return (
    <>
      <div className='flex flex-col p-10'>
      <div className="relative ">
        <img 
          className="w-full h-[12rem] rounded-lg object-cover" 
          src={card?.image} 
          alt={card?.title} 
        />
        <span className={`px-3 py-1  text-white rounded text-sm font-semibold absolute top-0 left-0 ${card?.category === 'GADGETS' ? 'bg-fuchsia-600' : 'bg-blue-700'}`}>
          {card?.category}
        </span>
      </div>
      <div className="p-2.5">
        <h3 className="text-lg font-bold my-2 p-2 hover:text-blue-700 cursor-pointer mb-6">
          {card?.title}
        </h3>
        <div className="flex items-center mb-16">
          <div className="flex flex-row text-sm p-2 gap-2 ">
            <span>{card?.author}</span>
            <span className="flex items-center">
              <svg 
                className="w-4 h-4 mr-1 text-gray-500 " 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12 1.5a9 9 0 100 18 9 9 0 000-18zM2.25 12a9.75 9.75 0 1117.813 6.563L12 12.75 4.188 19.313A9.75 9.75 0 012.25 12zm9.75-6.938A7.938 7.938 0 0118.938 12 7.938 7.938 0 0112 18.938 7.938 7.938 0 015.063 12 7.938 7.938 0 0112 5.063z" 
                  clipRule="evenodd" 
                />
              </svg>
              {card?.date}
            </span>
          </div>
        </div>
      </div>
      </div>
   </>
  );
};

export default Card;
