import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div className="poppins-font dark:bg-neutral-800 dark:text-white">
      <div className="md:w-11/12 mx-auto sticky top-0 z-50">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
