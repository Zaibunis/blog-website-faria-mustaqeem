import { BiWorld } from "react-icons/bi";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="flex flex-col md:flex-row h-auto md:h-[50px] bg-slate-800 justify-between items-center p-5 md:p-10 sticky top-0 z-50">
          {/* Logo Section */}
          <div className="flex flex-row gap-4 items-center w-full md:w-auto">
            <div className="text-white">
              <BiWorld className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex text-[20px] md:text-[30px] font-bold text-white items-center">
              Travel All Around
            </div>
          </div>

          {/* Navigation */}
          <nav className="md:ml-auto flex flex-col md:flex-row items-center text-base justify-center mt-4 md:mt-0 w-full md:w-auto">
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
            </ul>
          </nav>
        </div>
      </header>

      <section className="text-gray-600 bg-slate-200 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-wrap py-6">
            <div className="w-full px-6">
              <h2 className="title-font underline font-serif mb-[30px] font-extrabold text-gray-900 tracking-widest text-2xl">
                CONTACT INFO:
              </h2>

              <p className="text-lg font-serif text-gray-700 mb-6">
                Got an idea or something exciting to share? Don’t hesitate to get in touch – I’d love to hear your stories,
                explore new opportunities, and create something amazing together!
              </p>

              <div className="mt-4">
                <p className="font-semibold text-gray-900">LinkedIn:</p>
                <a href="https://www.linkedin.com/in/zainab-mustaqeem-3367b5301" className="text-indigo-500">
                  www.linkedin.com/in/zainab-mustaqeem-3367b5301
                </a>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="w-full lg:w-1/2 flex flex-col md:ml-auto mb-4 md:py-8 mt-8 md:mt-0 p-6 rounded">
            <h2 className="text-gray-900 text-lg mb-4 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 font-serif text-gray-800">
              We value your feedback! Share your thoughts, suggestions, or any ideas you have to help us improve. Your
              input is important to us.
            </p>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send Message
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Your feedback helps us grow and improve. Thank you for being a part of this journey!💖
            </p>
          </div>
        </div>
      </section>

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
}
