import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
  

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen mt-40 mb-20 lg:mt-10 lg:mb-10 md:mx-auto px-4 md:px-0" style={{ maxWidth: '1200px' }}>

      <div className="flex flex-col md:flex-grow items-left justify-center w-full md:w-3/5 md:mr-4 p-6 space-y-6">
        <h2 className="text-5xl font-bold mb-6">Contact Us</h2>
        <p className='w-4/5 pb-6'>A sustainable harvest awaits. Reach out to delve deeper into our mission for food security and sustainable farming, or to sow seeds of change with us.</p>
        <p>1234 Street Name, City, State</p>
        <p>(123) 456-7890</p>
        <p>email@company.com</p>
        <div className="flex mt-6 space-x-2">
            <a href="#!" className="text-2xl"><BsFacebook /></a>
            <a href="#!" className="text-2xl"><BsTwitter /></a>
            <a href="#!" className="text-2xl"><BsLinkedin /></a>
        </div>
    </div>

    <div className="flex flex-col md:flex-grow items-left justify-center w-full md:w-2/5 md:ml-4 p-6">
    <form className='space-y-4'>
          <div>
            <label className="block mb-4">Name <span className="text-gray-500 opacity-50">(required)</span></label>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="firstName" className="text-left text-sm block mb-1">First Name</label>
                <input id="firstName" className="w-full py-2 px-3 border bg-gray-100 outline-none focus:ring-2 focus:ring-black" type="text" required/>
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="lastName" className="text-left text-sm block mb-1">Last Name</label>
                <input id="lastName" className="w-full py-2 px-3 border bg-gray-100 outline-none focus:ring-2 focus:ring-black" type="text" required/>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 pt-5">
            <label htmlFor="email" className="text-left block mb-1">Email <span className="text-gray-500 opacity-50">(required)</span></label>
            <input id="email" className="w-full py-2 px-3 border bg-gray-100 outline-none focus:ring-2 focus:ring-black" type="email" required/>
          </div>

          <div className="flex flex-col space-y-4 pt-5">
            <label htmlFor="message" className="text-left block mb-1">Message <span className="text-gray-500 opacity-50">(required)</span></label>
            <textarea id="message" className="w-full py-2 px-3 border bg-gray-100 outline-none focus:ring-2 focus:ring-black" rows="3"></textarea>
          </div>

          <button type="submit" className="py-2 px-4 rounded bg-[#C38F4B] hover:bg-[#A27943] text-white">Submit</button>
        </form>
      </div>
    </div>
  );
}