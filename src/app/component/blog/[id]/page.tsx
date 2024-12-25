'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
}

interface Comment {
  name: string;
  comment: string;
}

export default function BlogPost() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { id } = useParams(); // Get the dynamic ID from the URL
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });

  useEffect(() => {
    if (id) {
      fetch('/data/blogs.json')
        .then((response) => response.json())
        .then((data) => {
          const foundBlog = data.find((item: Blog) => item.id.toString() === id);
          setBlog(foundBlog || null);
        })
        .catch((error) => console.error('Error fetching blog data:', error));
    }
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.comment) {
      // Add new comment to the comments state
      setComments([...comments, newComment]);
      // Reset the form
      setNewComment({ name: '', comment: '' });
    }
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">{blog.title}</h2>
        <p className="text-sm text-gray-500 text-center">{blog.date}</p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 h-96 relative mb-6 lg:mb-0">
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700">{blog.content}</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <div className="space-y-4">
            {/* Display existing comments */}
            {comments.map((comment, index) => (
              <div key={index} className="border-b pb-4 mb-4">
                <p className="font-semibold">{comment.name}</p>
                <p className="text-gray-700">{comment.comment}</p>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Your Feedback:</h3>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Comment</label>
                <textarea
                  value={newComment.comment}
                  onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  rows={4}
                  placeholder="Your comment"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
