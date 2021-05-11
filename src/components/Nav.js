import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
        <Link to="/MovieDisplay">
          <li>Movies</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
