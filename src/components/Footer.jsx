import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="w-full md:w-4/5 flex self-end flex-wrap justify-between py-6">
      <div className="w-1/3 flex justify-center">
        <ul className="w-1/2 flex flex-wrap text-xl  h-fit">
          <header className="w-full">Find US</header>
          <li className="list-none w-full text-sm mt-3">
            <NavLink to="branches">Branches</NavLink>
          </li>
          <li className="list-none w-full text-sm mt-1">
            <NavLink to="callus">Call Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-1/3 flex justify-end">
        <ul className="w-3/4 flex flex-wrap  text-xl">
          <header Services>Customer Services</header>
          <li className="list-none w-full text-sm mt-3">
            <NavLink to="returnpolicy">Return Policy</NavLink>
          </li>
          <li className="list-none w-full text-sm mt-1">
            <NavLink to="privacypolicy">Privacy Policy</NavLink>
          </li>{" "}
          <li className="list-none w-full text-sm mt-1">
            <NavLink to="privacypolicy">Privacy Policy</NavLink>
          </li>{" "}
          <li className="list-none w-full text-sm mt-1">
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
          <li className="list-none w-full text-sm mt-1">
            <NavLink to="hotline">Hotline</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-1/3 flex justify-end">
        <ul className="w-1/2 flex flex-wrap text-xl h-fit ">
          <header>Site Map</header>
          <li className="list-none w-full text-sm mt-3">
            <NavLink to="men">Men</NavLink>
          </li>
          <li className="list-none w-full text-sm mt-1">
            <NavLink to="kids">Kids</NavLink>
          </li>
          <li className="list-none w-full text-sm mt-1">
            <NavLink to="sale">Sale</NavLink>
          </li>
          <li className="list-none w-full text-sm mt-1">
            <NavLink to="cart">Cart</NavLink>
          </li>
          <li className="list-none w-full text-sm mt-1">
            <NavLink to="home">Home</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
