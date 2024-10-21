import Logo from "./ui/navbar-ui/Logo";
import SearchBar from "./ui/navbar-ui/SearchBar";
import UserActions from "./ui/navbar-ui/UserActions";
//import NavigationLinks from "./ui/navbar-ui/NavigationLinks";
import { IoMenu as Menu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

function NavigationBar() {
  return (
    <nav className="top-0 sticky bg-gray-800 text-neutral-200 antialiased">
      <div className="mx-auto max-w-screen-xl sm:mx-4 md:mx-8 font-medium border-b border-gray-600">
        <div className="py-2 flex justify-between items-center w-full">
          <Logo />
          <SearchBar />
          <UserActions />
        </div>
      </div>

      <div className="mx-auto sm:mx-4 md:mx-8 max-w-screen-xl flex items-center text-base">
        <div className="py-2.5 flex justify-between items-center w-full">
          <button type="button" className="flex justify-between items-center">
            <Menu className="mr-1"/>
            <span>All Categories</span>
            <FaChevronDown className="text-xs ml-1" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
