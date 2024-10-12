import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`p-6 fixed w-full z-10 shadow-md transition-all duration-300 ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">Don8</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none relative">
            {isOpen ? (
              <RiCloseFill className="text-4xl transition-transform duration-300 transform" />
            ) : (
              <RiMenu4Fill className="text-4xl transition-transform duration-300 transform" />
            )}
          </button>
        </div>
        <div className={`hidden md:flex space-x-4`}>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/donate" className='hover:underline'>Donate</Link>
          <Link to="/gallery" className='hover:underline'>Gallery</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`overflow-hidden bg-white text-black flex flex-col md:hidden`}
      >
        <div className="flex flex-col space-y-2">
        <Link to="/" className="hover:underline p-2 hover:bg-gray-700 ">Home</Link>
          <Link to="/donate" className='hover:underline p-2 hover:bg-gray-700'>Donate</Link>
          <Link to="/gallery" className='hover:underline p-2 hover:bg-gray-700'>Gallery</Link>
          <Link to="/blog" className="hover:underline p-2 hover:bg-gray-700 ">Blog</Link>
          <Link to="/about" className="hover:underline p-2 hover:bg-gray-700 ">About</Link>
          <Link to="/contact" className="hover:underline p-2 hover:bg-gray-700 ">Contact</Link>

        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;