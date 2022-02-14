import React from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <a href="">Loutout</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
