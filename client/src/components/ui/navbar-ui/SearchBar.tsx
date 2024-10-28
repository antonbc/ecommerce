import { IoSearchSharp as SearchIcon } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="hidden md:flex items-center flex-grow md:mx-12 lg:mx-16 h-10">
      <div className="flex items-center h-full">
        <button
          className="flex items-center gap-2 py-2 px-3 bg-gray-700  rounded-l-lg  border border-gray-600 h-full hover:bg-gray-600"
          aria-label="Select Category"
        >
          All
          <FaChevronDown className="text-xs"/>
        </button>
      </div>

      <input
        type="text"
        name="searchbar"
        id="searchbar"
        className="p-2 border-t border-b border-gray-600 bg-gray-700 outline-2 outline-slate-500 w-full h-full focus:outline-none"
        placeholder="Search..."
      />

      <button
        type="button"
        className="p-2 h-full rounded-r-lg bg-blue-600 hover:bg-blue-700"
        aria-label="Search"
      >
        <SearchIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default SearchBar;
