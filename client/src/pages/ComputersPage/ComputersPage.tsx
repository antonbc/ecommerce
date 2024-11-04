import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import ProductCardOverview from "../../components/ProductCardOverview";
function ComputersPage() {
  return (
    <div className="bg-gray-900 min-w-fit">
      <NavigationBar />
      <ProductCardOverview heading="Computers"/>
      <Footer />
    </div>
  );
}

export default ComputersPage;
