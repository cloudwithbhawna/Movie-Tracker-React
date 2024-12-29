import React from "react";
import { Link } from "react-router-dom"; // React Router se Link import karein

const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <a href="/">
            <span>Movie Tracker</span>
          </a>

          <ul>
            {/* Home link ko /home se replace kiya gaya */}
            <li>
              <Link to="/home">Home</Link> {/* Home link */}
            </li>
            <li>
              <Link to="/category">Genre</Link>
            </li>
            <li>
              <Link to="/movie">Movies</Link>
            </li>
            <li className="nav-item">
              <Link to="/manage">Manage</Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Navbar;