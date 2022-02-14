import React from "react";
import classes from "./Header.module.css";
import Navigation from "./Navigation";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>My CMS</h2>
        <Navigation />
      </header>
    </React.Fragment>
  );
};
export default Header;
