import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function BreadCrumbs() {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((pathname) => pathname !== "");

  return (
    <div className="bg-gray-900 p-2">
      <nav className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
        {/* Always show a link to Home */}
        <div className="flex items-center gap-2 hover:text-gray-200">
          <AiFillHome className="" />
          <Link to="/">
            Home
          </Link>
        </div>

        {pathnames.map((pathname, index) => (
          <>
            <MdOutlineKeyboardArrowRight className="text-2xl" />
            {index !== 0 ? (
              <span>{pathname[0].toUpperCase() + pathname.slice(1)}</span>
            ) : (
              <Link to={`/${pathname}`} className="hover:text-gray-300">
                {pathname[0].toUpperCase() + pathname.slice(1)}
              </Link>
            )}
          </>
        ))}
      </nav>
    </div>
  );
}

export default BreadCrumbs;
