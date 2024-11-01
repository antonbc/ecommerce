import BreadCrumbs from "./ui/product-card-overview-ui/BreadCrumbs";
import SortButton from "./ui/product-card-overview-ui/SortButton";
import FilterSideBar from "./ui/product-card-overview-ui/FilterSideBar";
import ProductCard from "./ui/product-card-overview-ui/ProductCard";
import products from "../assets/products/products";

function ProductCardOverview() {
  return (
    <>
      <div className="bg-gray-900 p-6 lg:px-8">
        <div>
          <BreadCrumbs />
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-gray-300 text-2xl">Electronics</h1>
            <SortButton />
          </div>
          <div className="flex gap-4"> {/* Flex container for filter sidebar and product cards */}
          <FilterSideBar />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> {/* Responsive grid layout */}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} /> 
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProductCardOverview;
