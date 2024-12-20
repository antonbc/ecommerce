import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import ProductCardOverview from "../../components/ProductCardOverview";
function SportsOutdoorsPage() {
  return (
    <div className="bg-gray-900 min-w-fit">
      <NavigationBar />
      <ProductCardOverview heading="Sports and Outdoors"/>
      <Footer />
    </div>
  );
}

export default SportsOutdoorsPage;
