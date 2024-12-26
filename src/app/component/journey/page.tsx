import { BiWorld } from "react-icons/bi";
import Link from "next/link";

export default function Journey() {
  const products = [
    {
      id: 1,
      title: 'Explore France',
      description: 'Discover the Eiffel Tower, Louvre Museum, and French cuisine.',
      image: '/france.jpeg', // Replace with actual product image
    },
    {
      id: 2,
      title: 'Visit Japan',
      description: 'Experience cherry blossoms, Mt. Fuji, and Japanese traditions.',
      image: '/japan.jpeg', // Replace with actual product image
    },
    {
      id: 3,
      title: 'Adventure in Brazil',
      description: 'Explore the Amazon, Rio Carnival, and vibrant beaches.',
      image: '/brazil.jpeg', // Replace with actual product image
    },
    {
        id: 4,
        title: 'Explore Egypt',
        description: 'A land of timeless wonders, where ancient pyramids meet the Niles serene beauty. Explore the Great Sphinx, Luxors temples, and the vibrant markets of Cairo.',
        image: '/egypt.jpeg', // Replace with actual product image
      },
      {
        id: 5,
        title: 'Visit Italy',
        description: 'A country of art, history, and breathtaking landscapes. From the canals of Venice to the ruins of Rome, and the rolling hills of Tuscany, Italy offers a rich blend of culture, cuisine, and natural beauty.',
        image: '/italy.jpeg', // Replace with actual product image
      },
      {
        id: 6,
        title: 'Adventure in India',
        description: 'A vibrant tapestry of culture, history, and spirituality. From the majestic Taj Mahal to the colorful streets of Jaipur, explore diverse landscapes, ancient temples, and a rich heritage that spans millennia.',
        image: '/india.jpeg', // Replace with actual product image
      },
  ];

  return (
    <div>
      {/* Header */}
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
              <li className="mr-5 hover:text-orange-500 text-white">
                <Link href="/component/journey">Journey</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Discover Top Destinations</h1>
          <p className="text-lg text-gray-600 mt-4">
            Find your next adventure from our curated list of amazing locations.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
                <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                   href={`/component/journey/${product.id}`}
                  className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


      </div>


  );
}
