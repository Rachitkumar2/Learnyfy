import React from 'react';
import { assets } from '../../assets/assets';
import Searchbar from './Searchbar';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-blue-100/70'>

      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 max-w-3xl mx-auto relative'>
        Empower Your Learning,
        <span className='text-purple-600'> On Your Terms.</span>
        <img 
          src={assets.sketch} 
          alt="sketch" 
          className='md:block hidden absolute bottom-7 right-0' 
        />
      </h1>

      {/* Desktop paragraph */}
      <p className='hidden md:block text-base md:text-lg text-gray-500 max-w-2xl mx-auto'>
        Access a world of interactive content, practical skills, and personalized paths designed for your success.
      </p>

      {/* Mobile paragraph */}
      <p className='md:hidden text-sm text-gray-500 max-w-sm mx-auto'>
        Access a world of interactive content, practical skills, and personalized paths designed for your success.
      </p>
      <Searchbar/>

    </div>
  );
};

export default Hero;
