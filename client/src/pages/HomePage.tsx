import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/FeaturedCategories";

function HomePage() {
  return (
    <div className="bg-gray-900">
      <NavigationBar />
      <HeroSection />
      <CategoriesSection />
      
    </div>
  );
}
export default HomePage;
