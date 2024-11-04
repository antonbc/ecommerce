import { useState } from "react";
import { FaRegHeart, FaHeart, FaStar, FaStarHalf } from "react-icons/fa";

interface ProductCardProps {
  product: {
    id: number;
    imageUrl: string;
    name: string;
    price: string;
    rating: number;
    reviewCount: number;
  };
}

function ProductCard({ product }: ProductCardProps) {
  const [heartColor, setHeartColor] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  // Destructuring product prop

  function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500 text-sm" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalf key={i} className="text-yellow-500 text-sm" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-800 text-sm" />);
      }
    }
    return stars;
  }

  return (
    <div className="relative grid h-full w-full">
      <button
        onClick={() => setHeartColor(!heartColor)}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="absolute top-3 right-3 p-1 rounded-md hover:bg-gray-600"
      >
        {heartColor ? (
          <FaHeart className="fill-red-600" />
        ) : (
          <FaRegHeart className="fill-gray-400" />
        )}
      </button>

      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="absolute top-0 right-6 transform -translate-y-full translate-x-1/2 flex items-center z-30">
          <div className="relative bg-gray-700 text-gray-200 text-xs font-medium p-2 rounded-md shadow-lg tracking-wide">
            Add to favorites
            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rotate-45"></div>
          </div>
        </div>
      )}

      <div className="border border-gray-700 p-4 rounded-md bg-gray-800">
        <div className="w-full h-32 mx-auto p-2">
          <img
            src={product.imageUrl} // Corrected to use imageUrl
            alt={`image ${product.id}`} // Changed index to product.id
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-2 flex flex-col gap-1/2">
          <h2 className="text-sm font-semibold text-gray-300">
            {product.name}
          </h2>
          <p className="text-sm text-gray-300">$ {product.price}</p>

          {/* Star rating and review count */}
          <div className="flex items-center">
            {renderStars(product.rating)} {/* Ensure renderStars is defined */}
            <span className="ml-1 text-xs text-center text-gray-400">
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
