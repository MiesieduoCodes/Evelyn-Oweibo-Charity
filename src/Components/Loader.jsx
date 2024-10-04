// src/Loader.js
import './Loader.css'; // Import the CSS for the loader

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-white">
      <div className="loader"></div>
      <h2 className="mt-4 text-lg">Loading...</h2>
    </div>
  );
};

export default Loader;