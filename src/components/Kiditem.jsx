import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addItem } from "../redux/actions";
function Kiditem({ product }) {
  const cartItems = useSelector((state) => state.items);
  const [added, setadded] = useState(
    cartItems.find((el) => el.name == product.name)
  );
  const dipatch = useDispatch();
  const loc = useLocation();
  return (
    <div className="w-1/2 h-[400px] md:h-[500px] px-1 md:w-1/4 md:mb-12">
      <div className="w-full h-1/2 md:h-2/3 relative overflow-hidden">
        <img src={product.image} alt="photo" />
        <div className="w-10 h-3 pl-1 md:w-20 md:h-4 md:text-[11px] bg-red-700 absolute top-0 left-0 text-white text-[7px]">
          Sale {product.sale}%
        </div>
      </div>
      <div className="h-1/2 md:1/3 w-full my-2">
        <button
          className={`w-full ${added ?"bg-stone-100 text-xl":" transition-all ease-linear duration-200 hover:bg-black hover:text-white"} h-1/6 md:1/4 border-[1px] text-md font-semibold border-black mb-2`}
          onClick={() => {dipatch(addItem(product));setadded(true)}}
          disabled={added}
        >
          {added?"In Cart" : "Quick Add"}
        </button>
        <p className="text-sm h-1/6 mb-2">{product.name}</p>
        <div className="text-md font-semibold w-full h-1/6">
          <span className="line-through mr-4 ">LE {product.price}</span>
          <span className="text-red-700">
            LE {product.price - product.price * (product.sale / 100)}
          </span>
        </div>
        <div className="text-md w-full flex h-1/6 my-2 ">
          <div
            className={`w-1/5 ${
              product.six && "line-through"
            }  border-1 border-black`}
          >
            6
          </div>
          <div
            className={`w-1/5 ${
              product.eight && "line-through"
            }  border-1 border-black`}
          >
            8
          </div>
          <div
            className={`w-1/5 ${
              product.ten && "line-through"
            }  border-1 border-black`}
          >
            10
          </div>
          <div
            className={`w-1/5 ${
              product.twelve && "line-through"
            }  border-1 border-black`}
          >
            12
          </div>
          <div
            className={`w-1/5 ${
              product.forteen && "line-through"
            }  border-1 border-black`}
          >
            14
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kiditem;
