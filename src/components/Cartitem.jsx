import React from "react";
import Counter from "./Counter";
import { NavLink } from "react-router-dom";
import { removeItem } from "../redux/actions";
import { useDispatch } from "react-redux";
function Cartitem({ item }) {
    const dispatch=useDispatch();
    const remove=removeItem();
  return (
    <div className="w-full h-1/2 md:w-1/3 flex flex-wrap mt-4 md:px-4 overflow-hidden">
      <section className="w-1/2 h-full">
        <img className="w-full" src={item.image} alt="photo" />
      </section>
      <section className="w-1/2 pl-2  flex flex-wrap   content-start justify-center">
        <div className="h-1/6 text-sm">{item.name}</div>
        <Counter />
        <div className="w-full my-4">Color : {item.color}</div>
        <NavLink
          to={`/order/${item.name}`}
          className="w-full border-[1px] h-1/6  text-sm hover:bg-black hover:text-white transition-all duration-500 border-black text-center content-center "
        >
          Order Now
        </NavLink>
        <div className="w-full my-2 flex ">
          <button className="w-1/2 h-1/10 border-[1px] border-black" onClick={()=>{dispatch(removeItem(item))}}>
            Delete
          </button>
          <p className="w-1/2 h-1/10 pl-2 text-[8px] content-center">vendor : MC</p>
        </div>
      </section>
    </div>
  );
}

export default Cartitem;
