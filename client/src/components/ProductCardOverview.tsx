import BreadCrumbs from "./ui/product-card-overview-ui/BreadCrumbs";
import SortButton from "./ui/product-card-overview-ui/SortButton";
import FilterSideBar from "./ui/product-card-overview-ui/FilterSideBar";
import ProductCard from "./ui/product-card-overview-ui/ProductCard";
import products from "../assets/products/products";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ProductCardOverview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 40; // Number of products to show at a time
  const totalPages = Math.ceil(products.length / productsPerPage);

  function goToNextSlide() {
    const isLastPage = currentIndex === totalPages - 1;
    const newIndex = isLastPage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToPreviousSlide() {
    const isFirstPage = currentIndex === 0;
    const newIndex = isFirstPage ? totalPages - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const startIndex = currentIndex * productsPerPage;
  const selectedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <>
      <div className="bg-gray-900 p-6 lg:px-8">
        <div>
          <BreadCrumbs />
          <div className="flex justify-between items-center py-3">
            <h1 className="font-bold text-gray-300 text-2xl">Electronics</h1>
            <SortButton />
          </div>
          <div className="flex gap-4">
            <FilterSideBar />
            <div className="flex flex-col w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
                {selectedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="flex justify-center items-center gap-4 mt-4 text-gray-300">
                <button
                  onClick={goToPreviousSlide}
                  className="p-2 border border-gray-600 rounded-md"
                >
                  <FaArrowLeft />
                </button>
                <span>
                  Page {currentIndex + 1} of {totalPages}
                </span>
                <button
                  onClick={goToNextSlide}
                  className="p-2 border border-gray-600 rounded-md"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCardOverview;
