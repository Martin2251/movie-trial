import React from "react";
import "../App.css";

function Header() {
  return (
    <header className="box">
      <a href="#"></a>
      <nav>
        <ul class="nav-list">
          <li class="nav-item">
            <a class="header-link-home">Home</a>
          </li>
          <li class="nav-item">
            <a class="header-link">Movies</a>
          </li>
          <li class="nav-item">
            <a class="header-link">Contact</a>
          </li>

          <li class="nav-item">
            <button class="header-link-btn">Sign In</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
