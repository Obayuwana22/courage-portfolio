import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col mx-5 min-h-screen">
      <div className="flex flex-col items-center text-center mt-10 ">
        <div className="flex items-center justify-center border-2 rounded-3xl w-[50px] h-[50px] text-2xl font-bold">
          JR
        </div>
        <h1 className="text-2xl tracking-[0.4em] font-medium mt-2">
          JULIA ROSSETTI
        </h1>
        <h2 className="tracking-[0.5em] text-gray-500">freelance colorist</h2>
      </div>

      <Navbar />
      <main>
        <Outlet />
      </main>

      <footer className="mt-auto ">
        <Footer />
      </footer>
    </div>
  );
};
export default HomeLayout;
