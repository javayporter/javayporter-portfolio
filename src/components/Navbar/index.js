import "./index.scss";

import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="links home-link" to="/">
        javayscript
      </Link>
      <nav>
        <NavLink exact="true" className="links" to="/about">
          about
        </NavLink>
        <NavLink exact="true" className="links" to="/portfolio">
          portfolio
        </NavLink>
        <NavLink className="links" to="/experience">
          work experience
        </NavLink>
        <NavLink className="links" to="/contact">
          contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
