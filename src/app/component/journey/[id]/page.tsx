'use client'; // Ensure this is a client component
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from "react";
import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Comment {
  id: number;
  text: string;
}

const JourneyDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // State to manage product data and comments
  const [product, setProduct] = useState<Product | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  // Simulating data fetching in useEffect
  useEffect(() => {
    const products: Product[] = [
      {
        id: 1,
        title: "Explore France",
        description:
          'France is a country renowned for its rich history, world-class art, and vibrant culture. From the romantic streets of Paris, with iconic landmarks like the Eiffel Tower and the Louvre Museum, to the serene vineyards of Bordeaux and the Mediterranean beaches of Nice, France offers a blend of modernity and tradition. Explore the quaint villages of Provence, marvel at the châteaux of the Loire Valley, or indulge in authentic French cuisine, including croissants, escargot, and gourmet wine. France is a dream destination for travelers seeking history, beauty, and a taste of European sophistication.',
        image: "/france.jpeg",
      },
      {
        id: 2,
        title: "Why You Should Visit Japan",
        description:
         "Japan is an island nation located in East Asia, renowned for its harmonious blend of ancient traditions and modern innovation. From the serene temples and vibrant festivals of Kyoto to the bustling streets and cutting-edge technology of Tokyo, Japan offers a captivating mix of history, culture, and modernity. The country is famous for its iconic landmarks such as Mount Fuji, the Imperial Palace, and the historic city of Nara. Japan's cuisine, including sushi, ramen, and tempura, is world-renowned. With its unique culture, natural beauty, and technological advancements, Japan is an unforgettable destination for travelers.",
        image: "/japan.jpeg",
      },
      {
        id: 3,
        title: "Adventure in Brazil",
        description:
          "Brazíl, the largest country in South America, is known for its vibrant culture, lively festivals, and breathtaking natural beauty. From the stunning beaches of Rio de Janeiro to the vast expanse of the Amazon Rainforest, Brazil offers a wealth of diverse experiences. The country is famous for its lively Carnival celebrations, samba music, and football passion. Natural wonders like the majestic Iguazu Falls and the Pantanal wetlands add to Brazil’s allure. Whether exploring the historic cities of Salvador, experiencing the energy of São Paulo, or relaxing on the golden beaches of Copacabana, Brazil is a destination full of energy, adventure, and unforgettable moments.",
        image: "/brazil.jpeg",
      },
      {
        id: 4,
        title: "Discover the Wonders of Egypt",
        description:
          "Egypt is a land of timeless wonders, where ancient history and vibrant modern culture intertwine. Famous for its monumental archaeological sites, such as the Great Pyramids of Giza and the Sphinx, Egypt offers a glimpse into one of the world's oldest civilizations. Visitors can cruise along the Nile River, explore the temples of Luxor, and uncover the treasures of the Valley of the Kings. Beyond the ancient sites, Egypt's bustling cities like Cairo blend tradition and modernity, offering vibrant markets and rich cultural experiences. Whether you’re marveling at the ancient wonders or immersing yourself in Egypt’s unique culture, it promises a journey through history like no other.",
        image: "/egypt.jpeg",
      },
      {
        id: 5,
        title: "Visit Italy",
        description:
        "Italy is a country renowned for its rich art, history, and culture. From the romantic canals of Venice to the ancient ruins of Rome, Italy offers an unparalleled experience of beauty and heritage. Explore the Renaissance masterpieces in Florence, indulge in world-famous Italian cuisine, from pizza to pasta, and savor the vineyards of Tuscany. The Amalfi Coast’s stunning Mediterranean views and the romantic allure of Venice’s gondola rides add to Italy’s charm. Whether you’re wandering through ancient ruins, enjoying the vibrant city life, or relaxing in the picturesque countryside, Italy is a destination that promises unforgettable experiences for every traveler.",
        image: "/italy.jpeg",
      },
      {
        id: 6,
        title: "Adventure in India",
        description:
         "India is a land of vibrant diversity, where ancient traditions and modern innovations coexist harmoniously. From the majestic Taj Mahal to the bustling streets of Delhi, India offers a rich tapestry of cultural experiences. Explore the serene temples of Varanasi, the colorful markets of Jaipur, and the spiritual landscapes of the Himalayas. The country is renowned for its diverse cuisine, from flavorful curries to sweet delicacies, and its festivals, which fill the air with color and music. Whether you’re captivated by the history of its ancient cities, the spirituality of its temples, or the warmth of its people, India is a place that leaves a lasting impression on every traveler.",
        image: "/india.jpeg",
      },
    ];

    const productData = products.find((product) => product.id.toString() === id);
    if (productData) {
      setProduct(productData);
    }
  }, [id]);

  // Handle adding a comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now(), // Unique ID using timestamp
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment(""); // Clear input after adding
    }
  };

  // Handle editing a comment
  const handleEditComment = (id: number, newText: string) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
  };

  // Handle deleting a comment
  const handleDeleteComment = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  if (!product) return <div>Loading...</div>; // Show loading if product is not found yet

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
              <li className="mr-5 hover:text-orange-500 text-white">
                <Link href="/component/journey">Journey</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto py-12 px-6">
  <h1 className="text-4xl font-mono font-bold text-gray-800 text-center">
    {product.title}
  </h1>

  {/* Responsive Layout for Image and Description */}
  <div className="mt-6 flex flex-col lg:flex-row items-center gap-8">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 max-w-[400px] p-4 bg-white border shadow-md rounded-md">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={267}
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Description Section */}
    <div className="w-full lg:w-1/2">
      <p className="text-lg mt-6 lg:mt-0 font-serif text-justify">
        {product.description}
      </p>
    </div>
  </div>
</div>
    {/* Comment Section */}
<div className="mt-12 mb-[50px] flex justify-center px-4 sm:px-6">
  <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
      Comments
    </h2>
    <div className="mt-4">
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full p-2 border rounded-md text-sm sm:text-base"
        placeholder="Add a comment"
      />
      <button
        onClick={handleAddComment}
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md w-full sm:w-auto"
      >
        Add Comment
      </button>
    </div>

    <div className="mt-8 space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="border p-4 rounded-md text-sm sm:text-base"
        >
          {/* Buttons moved to the top of the comment box */}
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() =>
                handleEditComment(
                  comment.id,
                  prompt("Edit comment:", comment.text) || comment.text
                )
              }
              className="text-yellow-500 text-xs sm:text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="text-red-500 text-xs sm:text-sm"
            >
              Delete
            </button>
          </div>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
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

export default JourneyDetails;
