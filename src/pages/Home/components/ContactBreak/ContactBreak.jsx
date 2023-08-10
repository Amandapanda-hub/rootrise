import React from 'react';

export default function ContactBreak() {
  return (
    <div className="h-[500px] md:h-[600px] lg:h-[400px] flex justify-center items-center overflow-hidden">
      <div className="flex flex-col p-10 md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-20 lg:h-[300px] lg:w-3/4 tracking-wider overflow-hidden">

        {/* Box 1 */}
        <div className="flex-1 p-4 break-words bg-[#fff] overflow-hidden word-wrap break-word hyphens-auto">
          <p className="text-left text-xl md:text-4xl leading-wide">
            Montes nascetur ridiculus mus mauris vitae ultricies leo integer.
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex-1 p-4 break-words bg-[#fff] overflow-hidden word-wrap break-word hyphens-auto flex flex-col ">
          <p className="text-left text-md leading-tight mb-4 w-4/5">
            Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.
          </p>
          
          <div className="flex-grow"></div>

          <div className="flex items-center space-x-4">
          <input type="email" placeholder="Enter your email" className="border border-gray-300 p-4 w-1/2 rounded-md"/>
            <button className="bg-[#D58A29] hover:bg-[#CB770B] text-white p-4 rounded-md">Sign Up</button>
          </div>
        </div>

      </div>
    </div>
  );
}
