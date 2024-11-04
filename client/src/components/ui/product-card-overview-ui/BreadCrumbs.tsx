import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function BreadCrumbs() {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((pathname) => pathname !== "");

  function convertToTitle(pathname : string) {
    return pathname.replace(/-/g, ' ') // Replace hyphens with spaces
                   .split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize words
                   .join(' ');
  }

  return (
    <div className="bg-gray-900">
      <nav className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
        {/* Always show a link to Home */}
          <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
           <AiFillHome className="" />
            Home
          </Link>

        {pathnames.map((pathname, index) => (
          <>
            <MdOutlineKeyboardArrowRight className="text-2xl" />
            {index !== 0 ? (
              <span className="text-gray-300">{convertToTitle(pathname)}</span>
            ) : (
              <Link to={`/${pathname}`} className="hover:text-gray-300">
                {convertToTitle(pathname)}
              </Link>
            )}
          </>
        ))}
      </nav>
    </div>
  );
}

export default BreadCrumbs;
