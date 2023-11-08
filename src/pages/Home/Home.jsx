import Slider from "../../Components/Slider/Slider";
import "./Home.scss"
import FeatureProducts from "../../Components/FeaturedProducts/FeatureProducts";
import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts type="Featured"/>
      <Categories />
      <FeatureProducts type="Trending"/>
      <Contact />
    </div>
  );
}
export default Home;