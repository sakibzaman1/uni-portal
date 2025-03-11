
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className=" mx-auto">
      <section className="">
        <NavBar></NavBar>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
