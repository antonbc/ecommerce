import { FaRegHeart, FaStar, FaStarHalf } from "react-icons/fa";

interface ProductCardProps {
  product: {
    id: number;
    imageUrl: string; // Corrected from imageURl to imageUrl
    name: string;
    price: string;
    rating: number;
    reviewCount: number;
  };
}

function ProductCard({ product }: ProductCardProps) {
  // Destructuring product prop

  function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500 text-sm" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalf key={i} className="text-yellow-500 text-sm" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-400 text-sm" />);
      }
    }
    return stars;
  }

  return (
    <div className="relative p-2">
      <FaRegHeart className="absolute top-1 right-1" />
      <div className="border border-gray-700 p-4 rounded-md bg-gray-800">
        <div className="w-full h-32 mx-auto">
          <img
            src={product.imageUrl} // Corrected to use imageUrl
            alt={`image ${product.id}`} // Changed index to product.id
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-2 flex flex-col gap-1/2">
          <h2 className="text-sm font-semibold">{product.name}</h2>
          <p className="text-sm">$ {product.price}</p>

          {/* Star rating and review count */}
          <div className="flex items-center">
            {renderStars(product.rating)} {/* Ensure renderStars is defined */}
            <span className="ml-1 text-xs text-center">
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
