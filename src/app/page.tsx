import Navbar from "./component/navbar";
import Hero from "./component/hero";

const Home: React.FC = () =>  {
  return(
    <div>
      <Navbar />
      <Hero
  title="Explore the World"
  subtitle="Discover new places and make memories"
  backgroundImage="/pak.jpeg"
  primarybuttonLink="/component/blog"
  secondarybuttonLink="/component/journey"
  primaryButtonText="Start Your Adventure"
  secondaryButtonText="More Journeys"
/>
      
    </div>
  )
}
export default Home
