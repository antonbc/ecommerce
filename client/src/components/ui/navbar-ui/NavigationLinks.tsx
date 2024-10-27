import { NavLink } from "react-router-dom";
import { IoMenu as Menu } from "react-icons/io5";

const navLinks = [
  { to: "/Department", label: "All", icon: <Menu className="mr-1 text-2xl" /> },
  { to: "/Department", label: "Today's Deals" },
  { to: "/Electronics", label: "Customer Service" },
  { to: "/", label: "Gift Cards" },
  { to: "/", label: "New Arrivals" },
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
  return (
    <ul className="flex space-x-6">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className="flex items-center hover:underline"
            style={linkStyle}
          >
            {link.icon}
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavigationLinks;
