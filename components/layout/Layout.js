import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dash from "./Dash";
import { useDispatch } from "react-redux";
import { atc } from "../../reducers/cartSlice";

function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
    dispatch(atc(cartItems));
  }, []);

  return (
    <>
      <Header />
      <Dash />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
