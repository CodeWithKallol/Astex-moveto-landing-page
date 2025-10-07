'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home' },
    { name: 'Services', dropdown: true },
    { name: 'Moving Planner', dropdown: true },
    { name: 'Contact' },
    { name: 'Pages', dropdown: true },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-30 text-black bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
          <div className="flex-shrink-0 hover:scale-105">
            <a href="#" className="text-3xl font-bold text-gray-800 ">Moveto</a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href="#" className="flex mx-5 items-center hover:text-orange-600 transition-colors duration-300 hover:scale-105">
                {link.name}
                {link.dropdown && <FiChevronDown className="ml-1" />}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-5 ">
            <a href="#" className="hover:text-orange-600 transition-colors hover:scale-110"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-600 transition-colors hover:scale-110"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-600 transition-colors hover:scale-110"><FaInstagram /></a>
            <Button className="mt-2 max-w-xs px-5 py-2 bg-orange-500 rounded-4xl text-sm font-medium hover:bg-orange-400 transition-all duration-300 cursor-pointer">GET A QUOTE</Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-dark bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a key={link.name} href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-brand-orange hover:bg-gray-700 transition-colors">
                {link.name}
              </a>
            ))}
            <Button className="mt-3 w-full max-w-xs px-5 py-2 bg-orange-500 rounded-md text-sm font-medium  hover:bg-orange-400 transition-all duration-300">GET A QUOTE</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;