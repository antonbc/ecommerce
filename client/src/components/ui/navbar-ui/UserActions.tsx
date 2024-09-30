import { FaRegHeart as HeartIcon } from "react-icons/fa";
import { HiOutlineShoppingCart as ShoppingCart } from "react-icons/hi";

function UserActions() {
  return (
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
      </button>

      <button
        className="flex items-center space-x-2 px-2 py-1.5 rounded-md hover:bg-gray-700"
        aria-label="My Account"
      >
        <HeartIcon className="text-xl" />
        <span>My Account</span>
      </button>
    </div>
  );
}

export default UserActions;
