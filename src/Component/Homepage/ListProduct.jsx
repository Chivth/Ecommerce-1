import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import accounting from "accounting";
import classes from "../pages/HomePage.module.css";
import { connect } from "react-redux";
import { SHOW_POPUP, HIDE_POPUP } from "../../Redux/toggle";
import ReduxProducts from "../../Redux/connectProduct";
const statePropsProduct = (state) => ({
  SHOW_POPUP: state.SHOW_POPUP,
  HIDE_POPUP: state.HIDE_POPUP,
});
const setStatePropsProduct = (dispatch) => ({
  showClick: () => dispatch({ type: SHOW_POPUP }),
  hideClick: () => dispatch({ type: HIDE_POPUP }),
});
const ListProduct = (Props) => {
  const [data, setData] = useState([]);
  console.log(data);
  const [dataPopup, setDataPopup] = useState([]);
  console.log(data);
  useEffect(() => {
    async function getAPI() {
      const api = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const apiJSON = await api.json();
      setData(apiJSON);
    }
    getAPI();
  }, []);
  const handleClick = (event) => {
    const index = data.findIndex((item) => item.name === event.target.id);
    setDataPopup(data[index]);
  };
  return (
    <div>
      <div className={classes.homepage_product}>
        <div className={classes.homepage_product_text}>
          <p>MADE THE HARD WAY</p>
          <span>TOP TRENDING PRODUCTS</span>
        </div>
        <div className={classes.homepage_product_info}>
          <div className={classes.homepage_product_infos}>
            {data.map((e, i) => {
              return (
                <div className={classes.homepage_product_info_block}>
                  <Link to="#">
                    <image onClick={handleClick}>
                      <img
                        id={e.name}
                        onClick={Props.showClick}
                        className={classes.homepage_product_info_block_img}
                        key={i}
                        src={e.img1}
                        alt=""
                      />
                    </image>
                  </Link>
                  <div>
                    <span>{e.name}</span>
                    <p>
                      {accounting.formatMoney(e.price, {
                        symbol: "VND",
                        thousand: ".",
                        precision: "",
                        format: "%v %s",
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ReduxProducts datas={dataPopup} />
    </div>
  );
};
const ReduxListProduct = connect(
  statePropsProduct,
  setStatePropsProduct
)(ListProduct);
export default ReduxListProduct;
