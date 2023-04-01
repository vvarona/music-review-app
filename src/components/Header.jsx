import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/my-reviews">My reviews</NavLink></li>
            <li><NavLink to="/album-page">Album page</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
