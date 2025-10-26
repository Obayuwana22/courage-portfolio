import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ColorWorks = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ColorWorks;
