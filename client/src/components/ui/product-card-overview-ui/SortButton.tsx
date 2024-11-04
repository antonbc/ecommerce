import { useState } from "react";
import { FaSortAlphaUpAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

function SortButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Sort");

  function toggleSortOption(option: string) {
    setSortOption(option);
    setIsOpen(!isOpen);
  }

  const sortOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "No. reviews",
    "Newest Arrivals",
    "Best Sellers",
  ];
  return (
    <div className="relative z-20">
      <button
        type="button"
        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 hover:text-gray-300 border border-gray-700 rounded-md p-2 text-gray-400 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaSortAlphaUpAlt />
        <span className="font-semibold">{sortOption}</span>
        <FaAngleDown />
      </button>

      {isOpen && (
        <div className="absolute right-0 mx-auto min-w-max mt-2 flex flex-col font-base text-sm bg-gray-800 text-gray-400 border border-gray-700 rounded-md p-1">
          {sortOptions.map((option, index) => (
            <button
              type="button"
              key={index}
              onClick={() => toggleSortOption(option)}
              className="hover:bg-gray-700 hover:text-gray-300 rounded-md py-1 px-2 w-full text-start"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortButton;
