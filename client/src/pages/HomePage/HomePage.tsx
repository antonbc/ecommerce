import NavigationBar from "../../components/NavigationBar";
import HeroSection from "../../components/HeroSection";
import CategoriesSection from "../../components/FeaturedCategories";
import NewArrivals from "../../components/NewArrivals";
import PopularProducts from "../../components/PopularProducts";
import BestSellers from "../../components/BestSellers";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <div className="bg-gray-900">
      <NavigationBar />
      <HeroSection />
      <PopularProducts />
      <BestSellers />
      <NewArrivals />
      <PopularProducts />
      <BestSellers />
      <CategoriesSection />
      <Footer />
    </div>
  );
}
export default HomePage;
