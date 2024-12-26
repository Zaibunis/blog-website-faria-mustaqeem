import { BiWorld } from "react-icons/bi";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Journey() {
  const products = [
    {
      id: 1,
      title: "Explore France",
      description: "Discover the Eiffel Tower, Louvre Museum, and French cuisine.",
      image: "/france.jpeg",
    },
    {
      id: 2,
      title: "Visit Japan",
      description: "Experience cherry blossoms, Mt. Fuji, and Japanese traditions.",
      image: "/japan.jpeg",
    },
    {
      id: 3,
      title: "Adventure in Brazil",
      description: "Explore the Amazon, Rio Carnival, and vibrant beaches.",
      image: "/brazil.jpeg",
    },
    {
      id: 4,
      title: "Explore Egypt",
      description:
        "A land of timeless wonders, where ancient pyramids meet the Nile's serene beauty.",
      image: "/egypt.jpeg",
    },
    {
      id: 5,
      title: "Visit Italy",
      description:
        "A country of art, history, and breathtaking landscapes. From the canals of Venice to the ruins of Rome.",
      image: "/italy.jpeg",
    },
    {
      id: 6,
      title: "Adventure in India",
      description:
        "A vibrant tapestry of culture, history, and spirituality. From the majestic Taj Mahal to the colorful streets of Jaipur.",
      image: "/india.jpeg",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-slate-800 sticky top-0 z-50 p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <BiWorld className="text-white w-6 h-6 md:w-8 md:h-8" />
            <h1 className="text-white text-lg md:text-2xl font-bold">
              Travel All Around
            </h1>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center md:flex-nowrap gap-4 text-white">
              <li className="hover:text-orange-500">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="/component/blog">Blog</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="/component/about">About</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="/component/contact">Contact</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="/component/journey">Journey</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Discover Top Destinations
          </h1>
          <p className="text-base md:text-lg text-gray-600 mt-4">
            Find your next adventure from our curated list of amazing locations.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  {product.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/component/journey/${product.id}`}
                  className="px-4 py-2 md:px-6 md:py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-6">
        <div className="text-center">
          <div className="flex flex-col items-center gap-4 mb-4">
            <BiWorld className="w-6 h-6 md:w-8 md:h-8" />
            <h1 className="text-lg md:text-2xl font-bold">Travel All Around</h1>
          </div>

          <p className="text-base font-bold">Stay In Touch!</p>
          <div className="flex justify-center gap-6 mt-4">
            <FaFacebook className="text-2xl hover:opacity-80" />
            <FaTwitter className="text-2xl hover:opacity-80" />
            <FaInstagram className="text-2xl hover:opacity-80" />
            <FaLinkedin className="text-2xl hover:opacity-80" />
          </div>

          <p className="text-sm text-gray-300 mt-6">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
