import React from 'react';
import { Button } from '../ui/button';

function HeroSection() {
  return (
    <div className='flex flex-col items-center mx-auto gap-6'>
        
        <h1 className='font-extrabold text-[50px] text-center mt-16'>
          <span className='text-[#f56551]'>Embark on Your Next Adventure with AI: </span><br /> 
          Personalized Trips, Unmatched Memories.
        </h1>

        <p className='text-xl text-gray-500 text-center'>
          Let AI craft your perfect itinerary so you can focus on the adventure ahead.
        </p>

        <Button>Get Started Right Now </Button>
       
    </div>
  );
}

export default HeroSection;
