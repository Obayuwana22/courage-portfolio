import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ComingSoon from "../components/ComingSoon";

const DOP = () => {
  return (
    <div>
      {/* <Navbar />
      <Outlet /> */}

      <ComingSoon />
    </div>
  );
};

export default DOP;
