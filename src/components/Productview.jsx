import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import { addItem } from "../redux/actions";
import { getManProduct } from "../supabase/client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function Productview() {
  const [product, setproduct] = useState({});
  const dipatch = useDispatch();
  const cartItems = useSelector((state) => state.items);
  const [added, setadded] = useState(
    false
  );

  const { id } = useParams();

  useEffect(() => {
    async function getproduct() {
      const data = await getManProduct(id);
      const [desdata] = data;
      setproduct(desdata);
      setadded(cartItems.find(el=>desdata.name==el.name))
    }
    getproduct();
    
  }, []);

  return (
    <div className="mt-8 w-4/5 text-center flex flex-wrap">
      <div className="w-full md:h-screen md:w-2/3  relative overflow-hidden">
        <img src={product.image} alt="photo" />
        <div className="w-10 h-3 pl-1 md:w-20 md:h-4 md:text-[11px] bg-red-700 absolute top-0 left-0 text-white text-[7px]">
          Sale {product.sale}%
        </div>
      </div>
      <div className="w-full md:w-1/3 flex px-3  justify-center content-center flex-wrap my-6">
        <header className="w-full">
          {" "}
          <h1 className="text-4xl">{product.name}</h1>
        </header>
        <main className="w-full">
          <h2 className="text-4xl my-6">
            <span className="pr-4 line-through">{product.price}</span>
            <span className="text-red-700">
              {product.price - product.price * (product.sale / 100)}
            </span>
          </h2>
          <section className="w-full text-3xl my-6">
            <p>Color : {product.color}</p>
          </section>
          <section className="w-full text-xl">vendor : MC collections</section>
          <div className="text-md w-full flex text-3xl my-6">
            <div
              className={`w-1/5 ${
                product.s && "line-through"
              }  border-2 aspect-square mx-2 content-center border-black border-solid`}
            >
              S
            </div>
            <div
              className={`w-1/5 ${
                product.s && "line-through"
              }  border-2 aspect-square mx-2 content-center border-black border-solid`}
            >
              M
            </div>
            <div
              className={`w-1/5 ${
                product.s && "line-through"
              }  border-2 aspect-square mx-2 content-center border-black border-solid`}
            >
              XL
            </div>
            <div
              className={`w-1/5 ${
                product.s && "line-through"
              }  border-2 aspect-square mx-2 content-center border-black border-solid`}
            >
              2XL
            </div>
            <div
              className={`w-1/5 ${
                product.s && "line-through"
              }  border-2 aspect-square mx-2 content-center border-black border-solid`}
            >
              3Xl
            </div>
          </div>{" "}
          <button
            className={`w-full h-1/6 md:1/4 border-[2px] text-sm  ${
              added
                ? "bg-stone-100 text-xl"
                : " transition-all ease-linear duration-200 hover:text-xl"
            } font-semibold border-black`}
            onClick={() => {
              dipatch(addItem(product));
              setadded(true)
            }}
            disabled={added}
          >
            {added ? "IN Cart" :"Add To Cart"}
          </button>
        </main>
      </div>
    </div>
  );
}

export default Productview;
