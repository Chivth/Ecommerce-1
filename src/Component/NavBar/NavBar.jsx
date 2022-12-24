import React from "react";

import { useNavigate } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.nav_bar}>
      <div className={classes.nav_bar_content}>
        <div className={classes.nav_bar_btn}>
          <button className={classes.nav_bar_color} onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/shop")}>Shop</button>
        </div>
        <div className={classes.nav_bar_title}>
          <p>BOUTIQUE</p>
        </div>
        <div className={classes.nav_bar_btn}>
          <button onClick={() => navigate("/cart")}>
            <i class="fa-solid fa-cart-flatbed"></i> Card
          </button>
          <button onClick={() => navigate("/login")}>
            <i class="fa-solid fa-user"></i> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
