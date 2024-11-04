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
  const priceRanges = [
    "Under $100",
    "$100 to $200",
    "$200 to $300",
    "$300 to $400",
    "$400 to $500",
    "$500 to $600",
    "$600 to $700",
    "$700 to $800",
    "$800 to $900",
    "$900 to $1000",
    "Over $1000",
  ];

  function renderStars(rating : number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "text-yellow-500 text-sm" : "text-gray-400 text-sm"}
        />
      );
    }
    return stars;
  }

  return (
    <div className="border border-gray-700 rounded-lg bg-gray-800 shadow-2xl h-full p-2 w-60 md:w-72 lg:w-80 space-y-4">
      <h3 className="font-semibold text-gray-300 text-lg">Filter</h3>

      <div className="flex flex-col border-t border-t-gray-700">
        <h4 className="font-semibold text-gray-300">Categories</h4>
        {categories.map((category, index) => (
          <label key={index} className="space-x-2">
            <input type="checkbox" name={category} id={category} />
            <span className="text-gray-400 text-sm font-medium">{category}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-1 border-t border-t-gray-700">
        <h4 className="font-semibold text-gray-300">Rating</h4>
        <div className="flex flex-col gap-1">
          {ratings.map((rating, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={`rating-${rating}`}
                id={`rating-${rating}`}
              />
              <div className="flex items-center">{renderStars(rating)}</div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col border-t border-t-gray-700 max-w-fit">
        <h4 className="font-semibold text-gray-300">Price</h4>
        <div className="flex flex-col space-y-1">
          {priceRanges.map((range, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input type="checkbox" name={`price-${index}`} id={`price-${index}`} />
              <span className="text-gray-400 text-sm font-medium">{range}</span>
            </label>
          ))}
        </div>
        <div className="flex gap-1 mt-2">
          <div className="flex flex-col w-1/2">
            <label htmlFor="priceFrom" className="text-gray-400 text-sm font-medium">From</label>
            <input
              type="number"
              id="priceFrom"
              name="priceFrom"
              placeholder="Min"
              className="text-gray-300 bg-gray-700 border border-gray-600 rounded-md p-1"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="priceTo" className="text-gray-400 text-sm font-medium">To</label>
            <input
              type="number"
              id="priceTo"
              name="priceTo"
              placeholder="Max"
              className="text-gray-300 bg-gray-700 border border-gray-600 rounded-md p-1"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col border-t border-t-gray-700">
        <h4 className="font-semibold text-gray-300">Brand</h4>
        {brands.map((brand, index) => (
          <label key={index} className="space-x-2">
            <input type="checkbox" name={brand} id={brand} />
            <span className="text-gray-400 text-sm font-medium">{brand}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 text-gray-300 font-semibold p-2 rounded-md hover:bg-blue-500">
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default FilterSideBar;
