import { NavLink } from "react-router-dom";

function NavigationLinks() {
  return (
    <ul className="flex space-x-6">
      <li>
        <NavLink
          to="/BestSeller"
          className="hover:underline"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "red" : "",
          })}
        >
          Best Sellers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/CustomerService"
          className="hover:underline"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "red" : "black",
          })}
        >
          Customer Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/GiftCard"
          className="hover:underline"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "red" : "black",
          })}
        >
          Gift Card
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/TopDeals"
          className="hover:underline"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "red" : "black",
          })}
        >
          Top Deals
        </NavLink>
      </li>
    </ul>
  );
}

export default NavigationLinks;
