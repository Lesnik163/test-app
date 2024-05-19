import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Common_Parts/Header";
import Footer from "../Common_Parts/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default memo(Layout);
