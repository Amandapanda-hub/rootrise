import React from 'react';

const LeftContainer = () => (
  <div className="text-left space-y-2">
    <h2 className="text-xl font-bold">Company Name</h2>
    <p>1234 Street Name</p>
    <p>City, State, ZIP</p>
    <p>(123) 456-7890</p>
  </div>
);

const ourWorkLinks = [
  { label: 'Link 1', url: '/path-to-link1' },
  { label: 'Link 2', url: '/path-to-link2' },
  { label: 'Link 3', url: '/path-to-link3' }
];

const socialLinks = [
  { label: 'Twitter', url: 'https://twitter.com/i/flow/login?lang=en' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { label: 'Facebook', url: 'https://www.facebook.com/' }
];


const RightContainer = () => (
  <div className="grid grid-cols-2 gap-2 lg:gap-10 w-full md:w-auto">
    <div className="text-left space-y-3">
      <h3 className="font-bold text-xl mb-8">Our Work</h3>
      {ourWorkLinks.map(link => (
        <a key={link.label} href={link.url} className="block hover:text-black hover:text-opacity-70">{link.label}</a>
      ))}
    </div>
    <div className="text-left space-y-3">
      <h3 className="font-bold mb-8 text-xl">Social</h3>
      {socialLinks.map(link => (
        <a key={link.label} href={link.url} className="block hover:text-black hover:text-opacity-70">{link.label}</a>
      ))}
    </div>
  </div>
);

  
  export default function Footer() {
    return (
<div className="bg-[#413E3A] py-12">
      <div className=" text-white max-w-[70em] mx-auto px-10 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-6 lg:space-x-12">        
        <LeftContainer />
        <RightContainer />
      </div>
      </div>
    );
  }
  