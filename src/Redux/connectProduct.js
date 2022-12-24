import { connect } from "react-redux";
import Product from "./Product";
import { SHOW_POPUP, HIDE_POPUP } from "./toggle";

const statePropsProduct = (state) => ({
  SHOW_POPUP: state.SHOW_POPUP,
  HIDE_POPUP: state.HIDE_POPUP,

});

const setStatePropsProduct = (dispatch) => ({
  showClick: () => dispatch({ type: SHOW_POPUP }),
  hideClick: () => dispatch({ type: HIDE_POPUP }),
});

const ReduxProducts = connect(statePropsProduct, setStatePropsProduct)(Product);
export default ReduxProducts;
