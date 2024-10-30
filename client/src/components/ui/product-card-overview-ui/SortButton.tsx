import { useState } from "react";
import { FaSortAlphaUpAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

function SortButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Sort")

  function toggleSortOption() {
    if (isOpen) {
      return;
    } else return setIsOpen(true);
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
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-md p-2 text-gray-400 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaSortAlphaUpAlt />
        <span className="font-semibold">Sort</span>
        <FaAngleDown />
      </button>

        {isOpen && (
            <div className="absolute">

            </div>
        )}
    </div>
  );
}

export default SortButton;
