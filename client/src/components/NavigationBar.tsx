import Logo from "./ui/navbar-ui/Logo";
import SearchBar from "./ui/navbar-ui/SearchBar";
import UserActions from "./ui/navbar-ui/UserActions";
import NavigationLinks from "./ui/navbar-ui/NavigationLinks";


function NavigationBar() {
  return (
    <nav className="z-50 top-0 sticky px-6 md:px-0 bg-gray-800 text-gray-200 antialiased">
      <div className="mx-auto max-w-screen-xl sm:mx-4 md:mx-8 font-medium border-b border-gray-600">
        <div className="py-2 flex justify-between items-center w-full">
          <Logo />
          <SearchBar />
          <UserActions />
        </div>
      </div>

      <div className="mx-auto sm:mx-4 md:mx-8 max-w-screen-xl flex items-center text-base">
        <div className="py-2 flex justify-between items-center w-full">
          <NavigationLinks/>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
