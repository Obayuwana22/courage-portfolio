import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ColorWork = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ColorWork;
