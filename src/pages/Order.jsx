import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector } from "react-redux";
import { useParams} from "react-router-dom";
function Order() {
    const cartitems=useSelector((state)=>state.items)
    const param =useParams()
    const [item]=cartitems.filter(el=>el.name!=param)
    
    useEffect(()=>{},[])
  return (
    <div className="w-4/5 flex flex-wrap mt-2">
      <header className="w-full text-xl text-center">Order Now</header>
      <form className="w-full flex flex-wrap">
        <label htmlFor="name" className="w-full mt-4 text-xl">
          User Name
        </label>
        <input
          type="text"
          className="mt-4 w-full pl-2 h-12 border-2 border-black"
          name="name"
          placeholder="Full Name..."
        />
        <label htmlFor="phone" className="w-full my-4 text-xl">
          Phone
        </label>
        <PhoneInput className="number" country={"eg"} name="phone" />
        <label htmlFor="address" className="w-full mt-4 text-xl">
          Address
        </label>
        <input
          type="text"
          className="mt-4 w-full pl-2 h-12 border-2 border-black"
          name="address"
          placeholder="Address..."
        />{" "}
        <div className="w-full mt-4 text-xl">
          <p className="w-full h-14 content-center text-center border-black border-2">
           {item?.name}
          </p>
        </div>
        <div className="w-full mt-4 text-xl">
          <p className="w-full h-14 content-center text-center border-black border-2">
            Total Price : {item?.price-(item?.price*(item?.sale/100))}
          </p>
        </div>
        <button className="w-1/2 my-4 h-14 hover:text-xl transition-all duration-200 ease-linear content-center text-center border-2 border-black">
            Confirm Order
        </button>

      </form>
    </div>
  );
}

export default Order;
