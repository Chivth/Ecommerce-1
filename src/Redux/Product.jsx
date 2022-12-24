import React from "react";
import accounting from "accounting";
import classes from "./Product.module.css";

const Product = (props) => {
  return (
    <div>
      {props.HIDE_POPUP ? (
        <div className={classes.Product}>
          <div className={classes.Product_main}>
            <div className={classes.Product_main_left}>
              <img src={props.datas.img1} alt="" />
            </div>
            <div className={classes.Product_main_right}>
              <i class="fa-solid fa-xmark" id={classes.close} onClick={props.showClick}></i>
              <div className={classes.Product_main_right_content}>
                <h5>{props.datas.name}</h5>
                <div className={classes.Price}>
                  {accounting.formatMoney(props.datas.price, {
                    symbol: "VND",
                    thousand: ".",
                    precision: "",
                    format: "%v %s",
                  })}
                </div>
                <p>{props.datas.short_desc}</p>
                <button className={classes.Clickbuy} >
                  <i class="fa-solid fa-cart-shopping" id={classes.cart}></i>
                  &nbsp; View Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
