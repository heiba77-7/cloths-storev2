import React from "react";
import Products from "../components/Products";
import { NavLink } from "react-router-dom";
import Kidslist from "../components/Kidslist";
function Home() {
  return (
    <section className="w-full flex flex-wrap justify-center">
      <NavLink
        to="/sale"
        className="w-full py-2 mt-2 bg-black text-white text-xl text-center mb-2 "
      >
        Mega Sale
      </NavLink>
      <div className="w-4/5 flex flex-wrap">
        <Products sorted={true} num={4} />
      </div>
      <NavLink
        to="/men"
        className="w-full py-2 bg-black text-white text-xl text-center mb-2 "
      >
        Men Collection
      </NavLink>{" "}
      <div className="w-4/5 flex flex-wrap">
        <Products num={4} />
      </div>{" "}
      <NavLink
        to="/men"
        className="w-full py-2 bg-black text-white text-xl text-center mb-2 "
      >
       Kids Collection 
      </NavLink>{" "}
      <div className="w-4/5 flex flex-wrap">
        <Kidslist num={4} />
      </div>
    </section>
  );
}

export default Home;
