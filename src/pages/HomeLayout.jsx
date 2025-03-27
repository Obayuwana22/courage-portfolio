import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center border-2 rounded-3xl w-[50px] h-[50px] text-2xl font-bold">
          JR
        </div>
        <h1 className="text-2xl tracking-[0.4em] font-medium mt-2">
          JULIA ROSSETTI
        </h1>
        <p className="tracking-[0.5em]">freelance colorist</p>
      </div>

      <Navbar />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
