import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dash from "./Dash";

function Layout({ children }) {
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
