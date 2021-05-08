import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/MovieDisplay">
          <li>MovieDisplay</li>
        </Link>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
        <Link to="./App">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
