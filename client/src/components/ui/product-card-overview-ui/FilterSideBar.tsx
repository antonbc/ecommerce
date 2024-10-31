import { useState } from "react";
import { FaStar } from "react-icons/fa";

function FilterSideBar() {
  const [categories] = useState([
    "Apple",
    "Samsung",
    "Dell",
    "Microsoft",
    "Asus",
    "Acer",
    "Dell",
    "Hp",
    "Nvidia",
    "Intel",
    "Amd",
  ]);
  const [ratings] = useState([5, 4, 3, 2, 1]);
  const [brands] = useState([
    "Brand A",
    "Brand B",
    "Brand C",
    "Brand D",
    "Brand E",
  ]);

  function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (stars.length !== 5 && stars.length >= rating) {
        stars.push(<FaStar key={i} className="text-gray-400 text-sm" />);
      } else {
        stars.push(<FaStar key={i} className="text-yellow-500 text-sm" />);
      }
    }

    return stars;
  }

  return (
    <div className="border border-gray-700 rounded-lg bg-gray-800 shadow-2xl h-full p-2 min-w-max space-y-4">
      <h3 className="font-semibold text-gray-300 text-lg">Filter</h3>

      <div className="flex flex-col border-t border-t-gray-700">
        <h4 className="font-semibold text-gray-300">Categories</h4>
        {categories.map((category, index) => (
          <label key={index} className="space-x-2">
            <input type="checkbox" name={category} id={category} />
            <span className="text-gray-400 text-sm font-medium">
              {category}
            </span>
          </label>
        ))}
      </div>

      <div className="flex flex-col border-t border-t-gray-700">
        <h4 className="font-semibold text-gray-300">Rating</h4>
        {ratings.map((rating, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              name={rating.toString()}
              id={rating.toString()}
            />
            <div className="flex items-center">
              {renderStars(rating)}
              <span className="ml-1 text-xs text-center"></span>
            </div>
          </label>
        ))}
      </div>

      <div className="flex flex-col border-t border-t-gray-700">
        <h4 className="font-semibold text-gray-300">Price</h4>
        <div className="grid grid-cols-2 grid-rows-2"></div>
      </div>

      <div className="flex flex-col border-t border-t-gray-700">
        <h4 className="font-semibold text-gray-300">Brand</h4>
        {brands.map((brand, index) => (
          <label key={index} className="space-x-2">
            <input type="checkbox" name={brand} id={brand} />
            <span className="text-gray-400 text-sm font-medium">
              {brand}
            </span>
          </label>
        ))}
      </div>

      {/* Apply Filters Button */}
      <button className="bg-blue-600 text-gray-300 font-semibold p-2 rounded-md hover:bg-blue-500">
        Apply Filters
      </button>
    </div>
  );
}

export default FilterSideBar;
