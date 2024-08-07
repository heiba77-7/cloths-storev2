import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Map from "../components/Map";
function AppLayout() {
  return (
    <>
      <div className="w-full h-screen flex-wrap justify-center font-Poppins">
        <NavBar />
        <main className="flex justify-center my-12 felx-wrap ">
          <Outlet  />
        </main>
        <section className="w-full self-end flex justify-center bg-red-700 text-white">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default AppLayout;
