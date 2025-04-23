import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import person from "../../assets/person.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={person} alt="Person Icon" />
      <input type="text" placeholder="Search by Tags" className={styles.search} />
      <ul className={styles.navbarList}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/todo">To Do</NavLink></li>
        <li><NavLink to="/completed">Completed</NavLink></li>
        <li><NavLink to="/addtask">Add New Task</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
