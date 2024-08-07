import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { addItem } from "../redux/actions";

function ProductCard({ product }) {
  const cartItems = useSelector((state) => state.items);
  const [added, setadded] = useState(
    cartItems.find((el) => el.name == product.name)
  );
  const dipatch = useDispatch();
  const loc = useLocation();

  return (
    <div className="w-1/2 h-[450px] md:h-[500px] lg:h-[650px] px-1 md:w-1/4 md:mb-6">
      <NavLink
        to={`${loc.pathname == "/" ? "men/" : ""}${product.id}`}
        className="w-full h-1/2 md:h-2/3 relative overflow-hidden"
      >
        <img src={product.image} alt="photo" />
        <div className="w-10 h-3 pl-1 md:w-20 md:h-4 md:text-[11px] bg-red-700 absolute top-0 left-0 text-white text-[7px]">
          Sale {product.sale}%
        </div>
      </NavLink>
      <div className="h-1/2 md:1/3 w-full my-2">
        <button
          className={`w-full h-1/6  border-[2px] text-sm  ${
            added
              ? "bg-stone-100 text-xl"
              : " transition-all ease-linear duration-200 hover:bg-black hover:text-white"
          } font-semibold border-black`}
          onClick={() => {
            dipatch(addItem(product));
            setadded(true);
          }}
          disabled={added}
        >
          {added ? "In Cart" : "Quick Add"}
        </button>
        <div className="w-full h-1/6 my-2">
          <NavLink
            to={`${loc.pathname == "/" ? "men/" : ""}${product.id}`}
            className="text-xs md:text-lg h-1/6"
          >
            {product.name}
          </NavLink>
        </div>

        <div className="text-md font-semibold  w-full h-1/6">
          <span className="line-through mr-4 ">LE {product.price}</span>
          <span className="text-red-700">
            LE {product.price - product.price * (product.sale / 100)}
          </span>
        </div>
        <div className="text-md w-full flex h-1/6  ">
          <div
            className={`w-1/5 ${
              product.s && "line-through"
            }  border-1 border-black`}
          >
            S
          </div>
          <div
            className={`w-1/5 ${
              product.md && "line-through"
            }  border-1 border-black`}
          >
            M
          </div>
          <div
            className={`w-1/5 ${
              product.xl && "line-through"
            }  border-1 border-black`}
          >
            XL
          </div>
          <div
            className={`w-1/5 ${
              product.twoxl && "line-through"
            }  border-1 border-black`}
          >
            2XL
          </div>
          <div
            className={`w-1/5 ${
              product.threexl && "line-through"
            }  border-1 border-black`}
          >
            3Xl
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
