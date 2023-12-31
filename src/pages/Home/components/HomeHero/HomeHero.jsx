
import React from 'react';

export default function HomeHero() {
  return (
    <div className="font-poppins relative h-[80vh] bg-center bg-cover z-10" style={{ backgroundImage: 'url(https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDY4fHxmYXJtfGVufDF8fHx8MTY9MTQzMzQyM3ww&ixlib=rb-4.0.3&q=80&w=1000)' }}>
      {/* Large centered container with space around */}
      <div className="absolute inset-10 md:inset-20 lg:inset-32 flex items-end mb-12 md:mb-10 lg:mb-8 xl:mb-4">
        {/* Container for content that will adjust its left-padding */}
        <div className="pl-0 md:pl-24 lg:pl-48 xl:pl-72">
          <h1 className="text-white font-poppins font-light text-3xl md:text-5xl lg:text-6xl md:w-1/2 mb-4 lg:w-1/2 break-words" style={{ textShadow: '2px 2px 2px black' }}>Nourishing the Earth, Securing Our Future.</h1>
          <button className=" bg-white text-black px-10 py-4 lg:py-5 lg:px-12 hover:bg-opacity-80">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
