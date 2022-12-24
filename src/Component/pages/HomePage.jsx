import React from "react";

import Banner from "../Homepage/Banner";
import ListCategory from "../Homepage/ListCategory";
import Others from "../Homepage/Others";

import ReduxListProduct from "../Homepage/ListProduct";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.homepage}>
      <Banner />
      <ListCategory />
      <ReduxListProduct />
      <Others />
    </div>
  );
};

export default HomePage;
