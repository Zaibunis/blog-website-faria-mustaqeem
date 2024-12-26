import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
              {buttonText}
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
          src="/img.webp"
        />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
             TRAVEL BLOG
          </h2>
         
          <a className="mt-3 underline text-indigo-900 inline-flex items-center">
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
      
      {/* Add margin-top to the image */}
      <Image
        alt="gallery"
        width={542}
        height={460}
        className="w-full object-cover h-full object-center block opacity-80 absolute inset-0"
        src="/japs.jpeg"
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
              src="/burj.jpg"
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
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
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
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            width={603}
            height={363}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/turkey.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            width={602}
            height={362}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/new zealand.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Neptune
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            width={605}
            height={365}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/america.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Holden Caulfield
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
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
            src="/palestine.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Alper Kamu
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Hero;
