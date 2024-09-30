import { FaRegHeart as HeartIcon } from "react-icons/fa";
import { HiOutlineShoppingCart as ShoppingCart } from "react-icons/hi";
import { IoSearchSharp as SearchIcon } from "react-icons/io5";
import  NavLinks   from "./NavLinks"

function NavigationBar() {
  return (
    <>
      <nav className="top-0 z-50 sticky bg-gray-800 text-neutral-200 antialiased">
        <div className="mx-auto max-w-screen-xl h-16 flex items-center md:font-sm lg:font-medium">
          <div className="px-2 py-3 flex justify-between items-center w-full">
            {/* Left Side */}
            <div>
              <div>LOGO</div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-grow mx-16 h-9">
              <div className="flex items-center h-full">
                <button
                  className="flex items-center p-2 bg-gray-700  rounded-l-lg  border border-gray-600 h-full hover:bg-gray-600"
                  aria-label="Select Category"
                >
                  All
                  <svg
                    className="w-3 h-3 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
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
                className="p-2 h-full rounded-r-lg bg-blue-700 hover:bg-blue-800"
                aria-label="Search"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4 text-sm">
              <button
                className="flex items-center space-x-2 px-2 py-1.5 relative rounded-md hover:bg-gray-700"
                aria-label="View Favorites"
              >
                <div>
                  <HeartIcon className="text-xl" />
                  <span className="absolute top-0.5 bg-red-600 text-xs text-neutral-200 rounded-full px-1">
                    6
                  </span>
                </div>
                <span>Favorites</span>
              </button>

              <button
                className="flex items-center space-x-2 px-2 py-1.5 relative rounded-md hover:bg-gray-700"
                aria-label="View Cart"
              >
                <div>
                  <ShoppingCart className="text-xl" />
                  <span className="absolute top-0.5 bg-red-600 text-xs text-neutral-200 rounded-full px-1">
                    6
                  </span>
                </div>
                <span>Cart</span>
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <button
                className="flex items-center space-x-2 px-2 py-1.5 rounded-md hover:bg-gray-700"
                aria-label="My Account"
              >
                <HeartIcon className="text-xl" />
                <span>My Account</span>
              </button>
            </div>
          </div>
        </div>

        <NavLinks/>
      </nav>
    </>
  );
}

export default NavigationBar;
