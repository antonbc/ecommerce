import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import ProductCardOverview from "../../components/ProductCardOverview";
function ElectronicsPage() {
  return (
    <div className="bg-gray-900 min-w-fit">
      <NavigationBar />
      <ProductCardOverview />
      <Footer />
    </div>
  );
}

export default ElectronicsPage;
