import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PiListBold } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
function NavBar() {
  const [navmobile, setnavmobile] = useState(false);
  return (
    <div className="w-full flex flex-wrap justify-center fixed top-0 z-50 bg-white pb-2 ">
      <nav className="w-4/5 flex flex-wrap mt-4 h-auto ">
        <div className="w-1/5">
          <Logo />
        </div>
        <Nav />
        <MobileNavicon navmobile={navmobile} setnavmobile={setnavmobile} />
        <MobileNav navmobile={navmobile} setnavmobile={setnavmobile} />
      </nav>
    </div>
  );
}
function Nav() {
  return (
    <div className={`hidden w-4/5 md:3/5 text-xl md:flex `}>
      <ul className="w-4/5 flex h-full">
        <li className="list-none w-1/4 text-center">
          <NavLink to="men">Men</NavLink>
        </li>
        <li className="list-none w-1/4 text-center">
          <NavLink to="kids">Kids</NavLink>
        </li>
        <li className="list-none w-1/4 text-center">
          <NavLink to="sale">Sale</NavLink>
        </li>
        <li className="list-none w-1/4 text-center">
          <NavLink to="branches">Branches</NavLink>
        </li>
      </ul>
      <NavLink to="cart" className="w-1/5 text-2xl hidden md:flex justify-center">
        <FaCartShopping />
      </NavLink>
    </div>
  );
}
function MobileNavicon({ setnavmobile, navmobile }) {
  return (
    <>
      <div
        className="w-4/5 md:hidden flex justify-end items-center text-2xl hover:cursor-pointer"
        onClick={() => setnavmobile(!navmobile)}
      >
        {navmobile ? <IoIosCloseCircleOutline /> : <PiListBold />}
      </div>
    </>
  );
}
function MobileNav({ navmobile ,setnavmobile}) {
  return (
    <>
        <div className={`w-full md:hidden bg-stone-100 `}>
          <ul className={`w-full  ${navmobile ? "visble opacity-100 ":"h-0 opacity-0"} transition-opacity ease-in-out duration-500 flex flex-wrap text-xl`}>
            <li
              className={`list-none w-full ${navmobile ? "visble ":"hidden"} text-center py-2 border-b-2 border-red-700`}
              
            >
              <NavLink to="men" onClick={() => setnavmobile(!navmobile)} className="w-full text-center content-center">Men</NavLink>
            </li>
            <li
              className={`list-none w-full ${navmobile ? "visble ":"hidden"} text-center py-2 border-b-2 border-red-700`}
            >
              <NavLink to="kids" onClick={() => setnavmobile(!navmobile)}className="w-full text-center content-center">Kids</NavLink>
            </li>{" "}
            <li
              className={`list-none w-full ${navmobile ? "visble ":"hidden"} text-center py-2 border-b-2 border-red-700`}
              
            >
              <NavLink to="sale"onClick={() => setnavmobile(!navmobile)}className="w-full text-center content-center">Sale</NavLink>
            </li>{" "}
            <li
              className={`list-none w-full ${navmobile ? "visble ":"hidden"} text-center py-2 border-b-2 border-red-700`}
              
            >
              <NavLink to="branches"onClick={() => setnavmobile(!navmobile)}className="w-full text-center content-center">Branches</NavLink>
            </li>
            <li
              className={`list-none w-full ${navmobile ? "visble ":"hidden"} text-center py-2 border-b-2 border-red-700`}
             
            >
              <NavLink to="cart" onClick={() => setnavmobile(!navmobile)}className="w-full text-center content-center">Cart</NavLink>
            </li>
          </ul>
        </div>
    </>
  );
}
export default NavBar;
