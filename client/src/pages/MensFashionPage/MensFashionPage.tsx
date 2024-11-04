import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import ProductCardOverview from "../../components/ProductCardOverview";
function MensFashionPage() {
  return (
    <div className="bg-gray-900 min-w-fit">
      <NavigationBar />
      <ProductCardOverview heading="Men's Fashion"/>
      <Footer />
    </div>
  );
}

export default MensFashionPage;
