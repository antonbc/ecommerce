import { Link, NavLink } from "react-router-dom";
import { IoMenu as Menu } from "react-icons/io5";
import { IoClose as CloseIcon } from "react-icons/io5";
import { IoSearchSharp as SearchIcon } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import { IoShirtOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { PiDress } from "react-icons/pi";
import { MdOutlineSportsTennis } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Today's Deals" },
  { to: "/", label: "Customer Service" },
  { to: "/", label: "Gift Cards" },
  { to: "/", label: "New Arrivals" },
];

const departmentLinks = [
  { label: "All Departments", to: "/department", icon: <TiThSmall /> },
  { label: "Electronics", to: "/electronics", icon: <MdOutlineShoppingBag /> },
  { label: "Computers", to: "/computers", icon: <RiComputerLine /> },
  { label: `Men's Fashion`, to: "/mens-fashion", icon: <IoShirtOutline /> },
  { label: `Women's Fashion`, to: "/womens-fashion", icon: <PiDress /> },
  {
    label: "Sports & Outdoors",
    to: "/sports-outdoors",
    icon: <MdOutlineSportsTennis />,
  },
  {
    label: "Home and Kitchen",
    to: "/home-kitchen",
    icon: <CgSmartHomeRefrigerator />,
  },
];

type LinkStyleProps = {
  isActive: boolean;
  isPending: boolean;
};

const linkStyle = ({ isActive, isPending }: LinkStyleProps) => ({
  fontWeight: isActive ? "semibold" : "",
  color: isPending ? "text-neutral-200" : "",
});

function NavigationLinks() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function toggleMenu() {
    return setIsSideBarOpen((prev) => !prev);
  }

  function closeSideBar() {
    return setIsSideBarOpen(false);
  }

  useEffect(() => {
    if (isSideBarOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSideBarOpen]);

  return (
    <>
      <ul className="flex space-x-3 sm:space-x-5 items-center antialiased">
        <li>
          <button
            onClick={toggleMenu}
            className="flex items-center text-xs sm:text-base"
          >
            <Menu className="mr-1 text-2xl" />
            All
          </button>
        </li>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className="flex items-center text-xs sm:text-base hover:underline"
              style={linkStyle}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {isSideBarOpen && (
        <div
          className="fixed inset-0 bg-gray-950 bg-opacity-45 z-15"
          onClick={closeSideBar}
        ></div>
      )}

      <div
        className={`antialiased fixed bg-gray-900 w-96 h-screen top-0 left-0 z-50 ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="bg-gray-800 flex justify-between items-center py-3 pl-4 pr-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-wide text-neutral-200"
            >
              <MdAccountCircle />
              <span>Hello, sign in</span>
            </Link>
            <CloseIcon
              onClick={closeSideBar}
              className="text-3xl hover:bg-gray-700 rounded-md"
            />
          </div>

          {/* Scrollable Section */}
          <div className="flex-grow overflow-auto flex flex-col gap-4 scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {/* Search Bar */}
            <div className="mt-4 md:hidden">
              <div className="flex items-center justify-between mx-4 bg-gray-700 border border-gray-600 rounded-lg p-2">
                <SearchIcon className="text-xl text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent focus:outline-none"
                />
                <button className="px-2 py-1 rounded-md font-md bg-blue-600 hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>

            <div className="mx-4 rounded-lg">
              <h3 className="py-2 text-lg font-bold tracking-wide text-neutral-200">
                Shop by Department
              </h3>

              <ul className="grid grid-cols-2 gap-2">
                {departmentLinks.map((department, index) => (
                  <li
                    key={index}
                    className={`bg-gray-700 hover:bg-gray-600 rounded-md border border-gray-500 ${
                      index === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <Link
                      to={department.to}
                      className={`flex items-center gap-2 px-2 py-2 text-neutral-200 text-sm ${index === 0 ? "justify-center" : ""}`}
                    >
                      {department.icon}
                      {department.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-4 rounded-lg">
              <h3 className="py-2 text-lg font-bold tracking-wide text-neutral-200">
                Help & Settings
              </h3>

              <ul className="grid grid-cols-1 gap-2">
                {departmentLinks.map((department, index) => (
                  <li
                    key={index}
                    className={`bg-gray-700 hover:bg-gray-600 rounded-md border border-gray-500`}
                  >
                    <Link
                      to={department.to}
                      className="flex items-center gap-2 px-2 py-2 font-medium text-neutral-200 text-sm"
                    >
                      {department.icon}
                      {department.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationLinks;
