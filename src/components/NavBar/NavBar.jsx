import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiLogoLinkedin, BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = 0.8 * window.innerHeight; 
            if (window.scrollY > heroHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };
    
    return (
        <nav className={`p-10 absolute top-0 left-0 w-full z-50 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="font-poppins container mx-auto flex justify-between items-center space-x-10">
                <Link to='/'>
                <span className="text-black text-2xl font-bold">RootsRise</span>
                </Link>

                <div className="hidden md:flex items-center space-x-10 ">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black underline hover:text-black hover:text-opacity-70' : 'text-black hover:text-black hover:text-opacity-70'}>
                    About
                </NavLink>
                <NavLink to="/missions" className={({ isActive }) => isActive ? 'text-black underline hover:text-black hover:text-opacity-70' : 'text-black hover:text-black hover:text-opacity-70'}>
                    Missions
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-black underline hover:text-black hover:text-opacity-70' : 'text-black hover:text-black hover:text-opacity-70'}>
                    Contact Us
                </NavLink>

                    <div className="flex space-x-4">
                        <BiLogoTwitter className="text-black" />
                        <BiLogoLinkedin className="text-black" />
                        <BiLogoFacebook className="text-black" />
                    </div>
                    <button className="bg-black hover:bg-opacity-80 text-white px-4 py-2 rounded">Take Action</button>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden px-2 py-6 text-2xl text-black">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

                 {isOpen && (
                <div className="absolute top-0 left-0 h-screen bg-[#3F2305] z-60 p-10 text-lg transform transition-transform duration-300 ease-in-out flex flex-col justify-center" style={{ 
                width: '75%', 
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' 
                }}>
                <div className="space-y-10 pb-20">
                <NavLink onClick={handleLinkClick} to="/about" className={({ isActive }) => isActive ? 'block text-center text-white hover:text-black hover:text-opacity-70' : 'block text-center text-white hover:text-black hover:text-opacity-70'}>
                    About
                </NavLink>
                <NavLink onClick={handleLinkClick} to="/missions" className={({ isActive }) => isActive ? 'block text-center text-white underline hover:text-black hover:text-opacity-70' : 'block text-center text-white hover:text-black hover:text-opacity-70'}>
                    Missions
                </NavLink>
                <NavLink onClick={handleLinkClick} to="/contact" className={({ isActive }) => isActive ? 'block text-center text-white underline hover:text-black hover:text-opacity-70' : 'block text-center text-white hover:text-black hover:text-opacity-70'}>
                    Contact Us
                </NavLink>

                    </div>
                    <div className="flex justify-center space-x-4 my-4">
                        <BiLogoTwitter className="text-white" />
                        <BiLogoLinkedin className="text-white" />
                        <BiLogoFacebook className="text-white" />
                    </div>
                    <div className="text-center py-2">
                        <button className="bg-white hover:bg-opacity-80 text-black px-4 py-2">Take Action</button>
                    </div>
                </div>
            )}

        </nav>
    )
}
