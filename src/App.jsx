import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./Component/pages/DetailPage";
import HomePage from "./Component/pages/HomePage";
import CartPage from "./Component/pages/CartPage";
import ShopPage from "./Component/pages/ShopPage";
import CheckOutPage from "./Component/pages/CheckOutPage";
import Login from "./Component/pages/LoginPage";
import RegisterPage from "./Component/pages/RegisterPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
export default App;
