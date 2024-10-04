// src/App.js
import { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar'; // Import your Navbar component
import Hero from "./Components/Hero";
import MiniSection from "./Components/MiniSection";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this to your desired loading duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <MiniSection />
          {/* Additional components can go here */}
          <h1 className="text-2xl text-center mt-4">Welcome to the App!</h1>
        </>
      )}
    </div>
  );
};

export default App;