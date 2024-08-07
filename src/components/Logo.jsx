import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="content-center text-2xl text-center h-full font-semibold">
      <NavLink to="/" className="">
        <span className="text-red-700">M</span>C
      </NavLink>
    </div>
  );
}

export default Logo;
