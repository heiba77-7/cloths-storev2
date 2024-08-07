import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";

function Cartlist() {
  const cartdata = useSelector((state) => state.items);
  console.log(cartdata.length);
  return (
    <>
      <div className="w-full h-full flex flex-wrap items-start content-start">
        {cartdata.length ? (
          cartdata.map((el) => <Cartitem item={el} />)
        ) : (
          <div className="w-full text-center mt-4 text-xl">Cart is empty</div>
        )}
      </div>
    </>
  );
}

export default Cartlist;
