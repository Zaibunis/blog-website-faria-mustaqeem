'use client'
import { BiWorld } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Blog() {
 
  interface Blog {
    id: number;
    title: string;
    image: string;
    description: string;
  }

  // Create a state to manage 'Read More' for each post
  const [expandedPosts, setExpandedPosts] = useState<{ [key: number]: boolean }>({});

  const handleReadMore = (index: number) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the expanded state for the clicked post
    }));
  };

  

  const posts = [
    
    {
      id:1,
      title: "An Overview of Paris: Its Features and Highlights",
      image: "/paris.jpeg",
      description: "Paris, the capital of France, is often referred to as the 'City of Light' due to its historical role as a center of education and ideas during the Age of Enlightenment...",
      fullDescription: "Renowned landmarks include the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum. Its exquisite cuisine, from croissants to fine wines, is unmatched, and the Seine River adds to the city's picturesque allure."
    },
    {
      id:2,
      title: "Exploring Turkey: A Land of Contrasts and Heritage",
      image: "/turkey.jpeg",
      description: "Turkey, officially known as the Republic of Turkey, is a transcontinental country bridging Europe and Asia. It is renowned for its rich history, diverse culture, breathtaking landscapes, and strategic geopolitical significance...",
      fullDescription: "Turkey spans two continents: the majority lies in Asia (Anatolia or Asia Minor), while a smaller portion is in Europe (Thrace). Bordered by eight countries, including Greece, Bulgaria, and Syria, and surrounded by seas: the Aegean Sea to the west, the Mediterranean Sea to the south, and the Black Sea to the north."
    },
    {
      id:3,
      title: "Saudi Arabia: Bridging Ancient Traditions with a Bold Vision for the Future",
      image: "/makkah.jpeg",
      description: "Saudi Arabia, officially known as the Kingdom of Saudi Arabia (KSA), is a country located on the Arabian Peninsula in the Middle East. Renowned for its rich history, cultural heritage, and economic significance...",
      fullDescription: "Covers most of the Arabian Peninsula, bordered by countries like Jordan, Iraq, Kuwait, Qatar, the UAE, Oman, and Yemen. Surrounded by the Red Sea to the west and the Arabian Gulf to the east. Its landscape is dominated by vast deserts, such as the Rub' al Khali (Empty Quarter), mountains, and oases."
    },
    {
      id:4,
      title: "New Zealand: A Land of Stunning Landscapes and Rich Culture.",
      image: "/new zealand.jpeg",
      description: "New Zealand, located in the southwestern Pacific Ocean, is an island nation known for its breathtaking landscapes, from snow-capped mountains to lush rainforests, rolling hills, and pristine beaches. This diverse country consists of two main islands—the North Island and the South Island—and numerous smaller islands...",
      fullDescription: "Famous for its unique biodiversity, New Zealand is home to a variety of native species, such as the iconic kiwi bird, and a wide range of outdoor activities, including hiking, skiing, and bungee jumping. The country's Maori heritage adds a rich cultural layer, with vibrant traditions, language, and art deeply rooted in its history."
    },
    {
      id:5,
      title: "Africa: Its Features and Highlights",
      image: "/africa.jpeg",
      description: "Africa is the second-largest and second-most populous continent in the world, known for its diverse cultures, languages, and landscapes. It is home to a vast array of ecosystems, from deserts like the Sahara to rainforests and savannas. Africa boasts incredible wildlife, including the Big Five—lions, elephants, buffalo, leopards, and rhinos—often found in its famous national parks and reserves like the Serengeti and Kruger Park...",
      fullDescription: "The continent is rich in cultural heritage, with over 3,000 ethnic groups and hundreds of languages spoken across its countries. It is also the birthplace of humanity, with ancient civilizations such as Egypt and Nubia, and more recently, vibrant and rapidly developing economies and cities."
    },
    {
      id:6,
      title: "America: A Land of Diversity, Innovation, and Opportunity",
      image: "/america.jpeg",
      description: "America, officially known as the United States of America (USA), is a vast and diverse country located primarily in North America. It spans over 3.8 million square miles, making it the third-largest country in the world by total area. The country is composed of 50 states, a federal district, and several territories, with Washington, D.C. as its capital...",
      fullDescription: "The United States is renowned for its rich cultural diversity, influenced by a history of immigration from all over the world. This multiculturalism is reflected in its cuisine, traditions, languages, and communities. Major cities such as New York, Los Angeles, and Chicago are cultural hubs, offering everything from world-class museums to vibrant music scenes."
    }
  ];

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
                <Link href="/blog">Blog</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-white">
                <Link href="/about">About</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-white">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-extrabold title-font mb-4 text-gray-900">BLOGS</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              A blog page is a part of a website where content is regularly published in the form of articles, posts, or news updates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div key={index} className="p-4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Link href={`/blog/${post.title}`}>
                    <span>
                      <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        width={720}
                        height={400}
                        src={post.image}
                        alt="blog"
                      />
                    </span>
                  </Link>
                  <div className="p-6">
                    <h1 className="tracking-widest text-2xl title-font font-bold text-black mb-1">
                      {post.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {post.description}
                      {expandedPosts[index] && (
                        <span>{post.fullDescription}</span>
                      )}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <button
                        onClick={() => handleReadMore(index)}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        {expandedPosts[index] ? "Read Less" : "Read More"}
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
