import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiWorld } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  
  buttonLink: string;
  primaryButtonText: string;
  secondaryButtonText: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonLink,
  primaryButtonText,
  secondaryButtonText,
}) => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white px-6">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-lg lg:text-2xl mt-4 text-center">
            {subtitle}
          </p>

          {/* Button */}
          <Link href={buttonLink}>
            <button className="mt-5 px-6 py-3 bg-orange-500 text-white text-lg rounded-md hover:bg-orange-600 transition duration-300">
              { primaryButtonText}
            </button>
          </Link>
        </div>
      </div>

      <section className="text-gray-600  body-font">
      <h1 className=" ml-[610px] mt-[50px] text-5xl font-extrabold title-font mb-4 text-gray-900">
        DETAIL
      </h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <Image
          alt="gallery"
          width={820}
          height={340}
          className="w-full object-cover h-full object-center block opacity-90 absolute inset-0"
          src="/lon.jpeg"
        />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-white font-bold title-font mb-2">
             TRAVEL BLOG
          </h2>
         
          <a className="mt-3 underline  text-white inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
  <div className="px-2 w-1/2">
    <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
      
      
      <Image
        alt="gallery"
        width={542}
        height={460}
        className="w-full object-cover h-full object-center block opacity-80 absolute inset-0"
        src="/swat.jpeg"
      />
      
      <div className="text-center relative z-10 w-full">
        <h2 className="text-xl text-gray-900 font-bold title-font mb-1">
         ABOUT JOURNEY
        </h2>
        
        {/* Add margin-top to the link */}
        <a className="mt-0 underline font-medium text-blue-950 inline-flex items-center">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>


        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image
              alt="gallery"
              width={542}
              height={420}
              className="w-full object-cover h-full object-center block opacity-90 absolute inset-0"
              src="/wa.jpeg"
            />
            <div className="text-center relative z-10 w-full">
            <h2 className="text-2xl text-gray-900 font-bold title-font mb-1">
             ABOUT TRAVEL
          </h2>
              
              <a className="mt-1 underline text-indigo-900 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h1 className=" ml-[50px] mt-[50px] text-5xl font-extrabold title-font mb-4 text-gray-900">
        JOURNEY
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex relative">
      <Image
        alt="gallery"
        width={600}
        height={360}
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/paris.jpeg"
      />
      <div className="flex items-center justify-center relative z-10 w-[600px] h-[230px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h1 className="title-font font-serif text-lg font-bold text-gray-900">
          Paris
        </h1>
      </div>
    </div>
  </div>


  <div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <img
      alt="gallery"
      width={601}
      height={361}
      className="absolute inset-0 w-full h-full object-cover object-center"
      src="/makkah.jpeg"
    />
    <div className="flex items-center justify-center relative z-10 w-[601px] h-[230px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h1 className="title-font font-serif text-lg font-bold text-gray-900">
        Saudia Arabia
      </h1>
    </div>
  </div>
</div>

<div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <img
      alt="gallery"
      width={603}
      height={363}
      className="absolute inset-0 w-full h-full object-cover object-center"
      src="/turkey.jpeg"
    />
    <div className="flex items-center justify-center relative z-10 w-[601px] h-[230px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h1 className="title-font font-serif text-lg font-bold text-gray-900">
        Turkey
      </h1>
    </div>
  </div>
</div>
      
<div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <img
      alt="gallery"
      width={604}
      height={364}
      className="absolute inset-0 w-full h-full object-cover object-center"
      src="/new zealand.jpeg"
    />
    <div className="flex items-center justify-center relative z-10 w-[601px] h-[230px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h1 className="title-font font-serif text-lg font-bold text-gray-900">
        New Zealand
      </h1>
    </div>
  </div>
</div>
<div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <img
      alt="gallery"
      width={605}
      height={365}
      className="absolute inset-0 w-full h-full object-cover object-center"
      src="/america.jpeg"
    />
    <div className="flex items-center justify-center relative z-10 w-[601px] h-[230px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h1 className="title-font font-serif text-lg font-bold text-gray-900">
       America
      </h1>
    </div>
  </div>
</div>
<div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <img
      alt="gallery"
      width={606}
      height={366}
      className="absolute inset-0 w-full h-full object-cover object-center"
      src="/swat.jpeg"
    />
    <div className="flex items-center justify-center relative z-10 w-[601px] h-[230px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h1 className="title-font font-serif text-lg font-bold text-gray-900">
       Swat
      </h1>
    </div>
    
  </div>
</div>
</div>
</div>
</section>

  {/* Buttons */}
  <div className="flex mt-5 space-x-4">
            

            {/* Secondary Button */}
            <Link href={buttonLink}>
              <button className="px-6 py-3 bg-orange-500 ml-[590px] mb-[50px] text-white text-lg rounded-md hover:bg-gray-600 transition duration-300">
                {secondaryButtonText}
              </button>
            </Link>
          </div>

          <div
      className="relative w-full h-[500px] bg-cover bg-center "
      style={{
        backgroundImage: "url('/swat.jpeg')", // Replace with the path to your image in the public folder
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Get Connected
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center">
        Got an idea or something exciting to share? Don’t hesitate to get in touch. 
        </p>
        <p className="mt-2 text-base md:text-lg text-center">
        I’d love to hear your stories, explore new opportunities, and create something amazing together!
        </p>

        {/* Button */}
        <Link href="/component/contact">
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg rounded-md hover:bg-orange-600 transition duration-300">
          Contact Me
        </button>
        </Link>
      </div>
    </div>
          
  <footer className="bg-slate-800 text-white py-8">
  <div className="container mx-auto text-center px-4">
    
    {/* Logo Section */}
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
      <div className="text-white">
        <BiWorld className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div className="flex text-[20px] md:text-[30px] font-bold text-white items-center">
        Travel All Around
      </div>
    </div>

    <p className="text-2xl mt-2 font-bold">Stay In Touch!</p>
    
    <div className="flex justify-center gap-6 mt-4 mb-4">
      <FaFacebook className="text-2xl hover:opacity-80" />
      <FaTwitter className="text-2xl hover:opacity-80" />
      <FaInstagram className="text-2xl hover:opacity-80" />
      <FaLinkedin className="text-2xl hover:opacity-80" />
    </div>

    {/* Footer Bottom Section */}
    <p className="text-sm text-gray-300">
      &copy; {new Date().getFullYear()} All rights reserved.
    </p>

  </div>
</footer>

    </div>
        
  );
};

export default Hero;
