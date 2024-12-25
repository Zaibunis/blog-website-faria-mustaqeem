import React from 'react';
import Link from 'next/link';

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string; 
  buttonLink: string; 
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">{title}</h1>

        {/* Subtitle */}
        <p className="text-sm md:text-lg lg:text-2xl mt-4 text-center">{subtitle}</p>
        
      {/* Button */}
<Link href={"/component/blog"} className='mt-5'>
  <button className="px-6 py-3 bg-orange-500 text-white text-lg rounded-md hover:bg-orange-600 transition duration-300">
    {buttonText}
  </button>
</Link>
      </div>
    </div>
  );
};

export default Hero;
