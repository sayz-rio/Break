import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video autoPlay loop className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0">
        <source src="/vdo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 px-2 py-4 flex flex-col items- justify-end h-full text-white">
        <h1 className="text-5xl font-bold">Your Catchy Headline</h1>
        <p className="mt-4 text-lg">Your subtitle or description goes here.</p>
        <button className="mt-6 h-14 w-fit items- justify-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default HeroSection;