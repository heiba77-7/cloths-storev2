import { useSelector } from "react-redux";
import React from "react";
import Cartitem from "../components/Cartitem";
import Cartlist from "../components/Cartlist";
function Cart() {
  const cartdata = useSelector((state) => state.items);
  console.log(cartdata);
  return (
    <div className={`w-4/5 ${cartdata.length?"h-fit":""} min-h-[70vh] mt-8 flex flex-wrap content-start justify-center`}>
      <header className="w-full text-2xl text-center">Cart</header>
      <main className="w-full h-full flex felx-wrap ">
        <Cartlist />
      </main>
    </div>
  );
}

export default Cart;
