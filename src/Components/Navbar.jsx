// src/Navbar.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Don8</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <RiCloseFill  /> : <RiMenu4Fill class />}
          </button>
        </div>
        <div className={`hidden md:flex space-x-4`}>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:hidden"
        >
          <Link to="/" className="p-2 hover:bg-gray-700">Home</Link>
          <Link to="/about" className="p-2 hover:bg-gray-700">About</Link>
          <Link to="/services" className="p-2 hover:bg-gray-700">Services</Link>
          <Link to="/contact" className="p-2 hover:bg-gray-700">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;