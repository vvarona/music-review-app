import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../assets/styles/Header.module.css"


export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/my-reviews">My reviews</NavLink></li>
            <li><NavLink to="/album-page">Album page</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
