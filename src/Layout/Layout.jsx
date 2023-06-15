import React, { useContext } from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Context/UseContext";

export default function Layout() {
  const { mode } = useContext(AuthContext);
  return (
    <div className={`${mode ? "bg-[white]" : "bg-[#1E1E1E]"}`}>
      <div className="lg:w-[1320px] md:w-full sm:w-full w-full lg:mx-auto mx:mr-0 sm:mx-0 mx-0 lg:px-0 md:px-3 sm:px-3 px-3 ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
