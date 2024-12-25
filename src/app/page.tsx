import Navbar from "./component/navbar";
import Hero from "./component/hero";

const Home: React.FC = () =>  {
  return(
    <div>
      <Navbar />
      <Hero
        title="Explore the World"
        subtitle="Discover new places and make memories"
        backgroundImage="/gk.jpeg" // Replace with your image URL
        buttonText="Start Your Adventure"
        buttonLink="/component/blog" // Link to the next page
      />

      
    </div>
  )
}
export default Home
