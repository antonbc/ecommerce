import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import products from "./ui/card-slider/products";

function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 6; // Number of products to show at a time
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
  const selectedProducts = products.slice(startIndex, startIndex + productsPerPage);

  function renderStars(rating : number){
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500 text-sm" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 text-sm" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-400 text-sm" />);
      }
    }
    return stars;
  };

  return (
    <div className="mb-16">
      <div className="mx-auto text-neutral-300">
        <div className="flex justify-between align-bottom w-full py-6 px-6 lg:px-8">
          <h1 className="font-bold text-2xl inline-flex">
            Best Sellers
          </h1>
          <div className="flex justify-between gap-1 md:gap-2">
            <button
              onClick={goToPreviousSlide}
              className="p-2 border border-gray-600 rounded-md"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={goToNextSlide}
              className="p-2 border border-gray-600 rounded-md"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {selectedProducts.map((product, index) => (
              <div className="border border-gray-700 p-4 rounded-md bg-gray-800" key={index}>
                <div className="w-full h-32 mx-auto">
                  <img
                    src={product.image}
                    alt={`image ${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-2 flex flex-col gap-1/2">
                  <h2 className="text-sm font-semibold">{product.name}</h2>
                  <p className="text-sm">$ {product.price}</p>
                  
                  {/* Star rating and review count */}
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                    <span className="ml-1 text-xs text-center">({product.reviewCount})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
