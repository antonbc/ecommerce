import { FaRegHeart as HeartIcon} from "react-icons/fa";
import { HiOutlineShoppingCart as ShoppingCart } from "react-icons/hi";
import { IoSearchSharp as SearchIcon} from "react-icons/io5";

function NavigationBar() {
  return (
    <>
      <nav className="top-0 z-50 sticky bg-neutral-950 text-neutral-300 antialiased">
        <div className="mx-auto max-w-screen-xl w-full  box-border">
          <div className="px-2 py-3 flex justify-between items-center">

            {/*Left Side */}
            <div>
              <div>LOGO</div>
            </div>

            {/*Search Bar */}
            <div className="hidden lg:flex justify-center items-center">
              <button className="flex justify-between items-center">
                <span>All</span>
              </button>
              <input type="text" name="searchbar" id="searchbar" className="hidden lg:flex" />
              <button type="button" className="flex items-center justify-center bg-">
                <SearchIcon/>
              </button>
            </div>

            {/*Right Side */}
            <div className="flex justify-between items-center text-base">
              <button className="">
                <div>
                  <HeartIcon className="relative"/>
                  <span className="">6</span>
                </div>
                <span>Favorites</span>
              </button>
              <button className="">
                <div>
                  <ShoppingCart className="relative"/>
                  <span className="">6</span>
                </div>
                <span>Favorites</span>
              </button>


              <button className="flex">
                <HeartIcon className=""/>
                <span className="">My Account</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
