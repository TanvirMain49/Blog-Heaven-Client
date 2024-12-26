import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div className="poppins-font">
      <div className="w-11/12 mx-auto sticky top-0 z-50">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
