
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl">
      <section className="mb-10">
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
