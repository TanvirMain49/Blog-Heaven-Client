import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="poppins-font">
      <div className="w-10/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
