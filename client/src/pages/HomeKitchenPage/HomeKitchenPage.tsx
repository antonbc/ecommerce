import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import ProductCardOverview from "../../components/ProductCardOverview";
function HomeKitchenPage() {
  return (
    <div className="bg-gray-900 min-w-fit">
      <NavigationBar />
      <ProductCardOverview heading="Home and Kitchen"/>
      <Footer />
    </div>
  );
}

export default HomeKitchenPage;
