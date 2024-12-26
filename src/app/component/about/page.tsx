'use client'

import { BiWorld } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      {/* Header Section */}
      <header className="text-gray-600 body-font">
        <div className="flex flex-col md:flex-row h-auto md:h-[50px] bg-slate-800 justify-between items-center p-5 md:p-10 sticky top-0 z-50">
          
          {/* Logo and Hamburger Section */}
          <div className="flex flex-row items-center justify-between w-full md:w-auto">
            {/* Logo */}
            <div className="flex gap-4 items-center">
              <div className="text-white">
                <BiWorld className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex text-[20px] md:text-[30px] font-bold text-white items-center">
                Travel All Around
              </div>
            </div>

            {/* Hamburger Icon for Mobile, placed on the right side */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1">
                  <div className="w-6 h-1 bg-white"></div>
                  <div className="w-6 h-1 bg-white"></div>
                  <div className="w-6 h-1 bg-white"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:block md:ml-auto flex flex-col md:flex-row items-center text-base justify-center mt-4 md:mt-0 w-full md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row gap-4 w-full md:w-auto text-center md:text-left">
              <li className="mr-5 hover:text-orange-500 text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-white">
                <Link href="/component/blog">Blog</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-white">
                <Link href="/component/about">About</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-white">
                <Link href="/component/contact">Contact</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-white">
                <Link href="/component/journey">Journey</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col lg:flex-row mb-10 lg:mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font underline text-gray-900 mb-4 lg:mb-0 lg:w-1/3">
              Explore the Beauty of the <span className="block text-center lg:ml-[0]">World</span>
            </h1>
            <div className="lg:w-2/3">
              <p className="text-black font-medium leading-relaxed text-base">
                Travel opens the door to a world of endless possibilities. From the serene beaches of tropical islands to the vibrant energy of bustling cityscapes, every journey enriches your soul. Discover cultures, create memories, and immerse yourself in the wonders of our diverse planet.
              </p>
              <p className="text-gray-900 mt-4 font-mono text-right">
                Let the adventure begin! 🌟
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex flex-wrap">
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  width={500}
                  height={300}
                  className="w-full object-cover h-full object-center block transition-all transform hover:scale-110 rounded-lg"
                  src="/paris.jpeg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  width={501}
                  height={301}
                  className="w-full object-cover h-full object-center block transition-all transform hover:scale-110 rounded-lg"
                  src="/turkey.jpeg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  width={600}
                  height={360}
                  className="w-full h-full object-cover object-center block transition-all transform hover:scale-110 rounded-lg"
                  src="/makkah.jpeg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  width={601}
                  height={361}
                  className="w-full h-full object-cover object-center block transition-all transform hover:scale-110 rounded-lg"
                  src="/new zealand.jpeg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  width={502}
                  height={302}
                  className="w-full object-cover h-full object-center block transition-all transform hover:scale-110 rounded-lg"
                  src="/america.jpeg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  width={503}
                  height={303}
                  className="w-full object-cover h-full object-center block transition-all transform hover:scale-110 rounded-lg"
                  src="/palestine.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
