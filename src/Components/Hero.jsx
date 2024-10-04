// src/HeroSection.js
import { motion } from 'framer-motion';
import Navbar from "./Navbar";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('src/Images/pixelcut-export.jpeg')" }}>
          <Navbar />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-start h-full p-8">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bolder"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Don8 Here <br />
          Abeggg <br />
          <button className='bg-brown-500 border-green-700  text-white rounded-lg'>Explore</button>
        </motion.h1>
      </div>
    </div>
  );
};

export default HeroSection;