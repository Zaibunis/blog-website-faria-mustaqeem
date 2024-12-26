import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface JourneyDetailsProps {
  params: { id: string };
}

const JourneyDetails = async ({ params }: JourneyDetailsProps) => {
  const { id } = params;

  // Simulate fetching data based on the dynamic ID
  const products: Product[] = [
    { id: 1, title: 'Explore France', description: 'Discover France.', image: '/france.jpeg' },
    { id: 2, title: 'Visit Japan', description: 'Explore Japan.', image: '/japan.jpeg' },
    { id: 3, title: 'Adventure in Brazil', description: 'Visit Brazil.', image: '/brazil.jpeg' },
    { id: 4, title: 'Explore Egypt', description: 'Discover Egypt.', image: '/egypt.jpeg' },
    { id: 5, title: 'Visit Italy', description: 'Travel to Italy.', image: '/italy.jpeg' },
    { id: 6, title: 'Adventure in India', description: 'Explore India.', image: '/india.jpeg' },
  ];

  // Find the product by ID
  const product = products.find((product) => product.id.toString() === id);

  // If the product is not found, return a 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
      <div className="mt-6">
        <Image
          src={product.image}
          width={500}
          height={800}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        <p className="text-lg mt-6">{product.description}</p>
        {/* You can add more information here */}
      </div>
    </div>
  );
};

export default JourneyDetails;
