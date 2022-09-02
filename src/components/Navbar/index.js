import "./index.scss";

import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact="true" className="links" to="/portfolio">
        portfolio
      </NavLink>
      <Link className="links" to="/">
        work experience
      </Link>
      <Link className="links" to="/">
        contact
      </Link>
    </div>
  );
};

export default Navbar;
