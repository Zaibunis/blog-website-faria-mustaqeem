'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

// Define your types for blog and comment data
interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
}

interface Comment {
  id: number;
  text: string;
  userName: string;
  timestamp: string;
}

const BlogDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState(""); // To store the name of the person commenting
  const [emoji, setEmoji] = useState(""); // To store the emoji selected

  // Simulate blog data fetching
  useEffect(() => {
    const blogs: Blog[] = [
      {
        id: 1,
        title: "An Overview of Paris: Its Features and Highlights",
        content: "Paris is the capital city of France, known for its rich history, iconic landmarks, and vibrant culture. Often called the City of Light, Paris is home to world-renowned attractions like the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum. With its beautiful streets, charming cafés, and artistic heritage, Paris offers a unique blend of modernity and tradition. The city is a global center for art, fashion, and cuisine, making it a must-visit destination for travelers from around the world.",
        image: "/france.jpeg",
      },
      {
        id: 2,
        title: "Exploring Turkey: A Land of Contrasts and Heritage",
        content: "Turkey, a country that straddles the divide between Europe and Asia, is a unique blend of ancient history, vibrant culture, and modern dynamism. Known for its rich historical sites, Turkey is home to some of the most iconic landmarks of the ancient world, including the ruins of Ephesus, the majestic Hagia Sophia in Istanbul, and the fairy chimneys of Cappadocia. The country’s culture is deeply rooted in a mix of Eastern and Western traditions, reflected in its lively bazaars, aromatic cuisine, and diverse architecture.",
        image: "/turkey.jpeg",
      },
      {
        id: 3,
      title: "Saudi Arabia: Bridging Ancient Traditions with a Bold Vision for the Future",
        content: "Saudi Arabia, located on the Arabian Peninsula, is a country of striking contrasts, where rich history intertwines with bold visions for the future. Known as the birthplace of Islam, it is home to the two holiest cities in the Muslim world, Mecca and Medina, which draw millions of pilgrims each year for the Hajj pilgrimage. The country's vast desert landscapes, including the Rub' al Khali (Empty Quarter), offer a sense of awe and tranquility, while the rapidly modernizing cities, especially Riyadh and Jeddah, are symbols of its ambitious growth and modernization.",
        image: "/makkah.jpeg",
      },
      {
        id: 4,
        title: "New Zealand: A Land of Stunning Landscapes and Rich Culture.",
        content: "New Zealand, an island nation located in the southwestern Pacific Ocean, is renowned for its breathtaking natural beauty and vibrant cultural heritage. Comprising two main islands—the North Island and the South Island—along with numerous smaller islands, New Zealand offers an array of landscapes, from snow-capped mountains and dense rainforests to rolling hills and pristine beaches. The country is a paradise for outdoor enthusiasts, offering activities like hiking, skiing, bungee jumping, and world-famous adventures such as the Tongariro Crossing and Milford Sound.",
        image: "/new zealand.jpeg",
      },
      {
        id: 5,
      title: "Africa: Its Features and Highlights",
        content: "Africa, the second-largest and second-most populous continent, is a land of unparalleled diversity, both in its people and landscapes. Stretching from the vast Sahara Desert in the north to the lush rainforests and savannas of Central and West Africa, the continent boasts a range of ecosystems that support an extraordinary variety of wildlife. Africa is home to iconic species such as lions, elephants, and rhinoceroses, which roam freely in its renowned national parks like the Serengeti, Maasai Mara, and Kruger. The African wildlife experience is unmatched, with safaris offering up-close encounters with nature’s greatest creatures.",
        image: "/africa.jpeg",
      },
      {
        id: 6,
      title: "Palestine: A Struggle for Land, Identity, and Peace",
        content: "Palestine is a region with a deep and complex history, shaped by centuries of conflict, displacement, and resilience. At the heart of the modern conflict is the Palestinian struggle for self-determination, as the Palestinian people seek to establish an independent state within the territories of the West Bank and Gaza Strip. These areas, occupied by Israel since the 1967 Six-Day War, have become the focal point of a protracted and unresolved dispute. The Palestinian population has faced displacement, military occupation, and significant challenges related to movement, access to resources, and political sovereignty.",
       image: "/gg.jpeg",
      },
    ];

    const blogData = blogs.find((blog) => blog.id.toString() === id);
    if (blogData) {
      setBlog(blogData);
    }
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  const handleAddComment = () => {
    if (newComment.trim() && userName.trim()) {
      const newCommentObj: Comment = {
        id: Date.now(),
        text: emoji ? `${emoji} ${newComment}` : newComment, // Add emoji only if selected
        userName: userName,
        timestamp: new Date().toLocaleString(),
      };
      setComments((prevComments) => [newCommentObj, ...prevComments]); // Add new comment at the top
      setNewComment(""); // Clear input after adding
      setUserName(""); // Clear name field
      setEmoji(""); // Clear emoji selection
    }
  };

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
        <h1 className="text-4xl font-mono font-bold text-gray-800">{blog.title}</h1>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 max-w-[400px] p-4 bg-white border shadow-md rounded-md">
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={267}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg mt-6 font-serif">{blog.content}</p>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-12 mb-[50px] flex justify-center">
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Your Feedback</h2>
          <div className="mt-4 flex space-x-4">
            <div className="w-full">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Your Name"
              />
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Add a comment"
              />
           
           
              <button
                onClick={handleAddComment}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Add Comment
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border p-4 rounded-md shadow-md">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{comment.userName}</span>
                    <span className="text-sm text-gray-500">{comment.timestamp}</span>
                  </div>
                  <button
                    onClick={() => {
                      const updatedComments = comments.filter(
                        (com) => com.id !== comment.id
                      );
                      setComments(updatedComments);
                    }}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
                <div className="flex items-center">
                  {comment.text}
                </div>
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

export default BlogDetails;
