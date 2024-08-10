import React from "react";
import { getAllKidsProducts } from "../supabase/client";
import { useState,useEffect } from "react";
import Kiditem from "./Kiditem";
import SortMenu from "./SortMenu";
import Loader from "./Loader";
function Kidslist({sorted,num,needsort}) {
  let [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [sortby, setsortby] = useState("");
  useEffect(() => {
    async function getproducts() {
      setloading(true);
      const product = await getAllKidsProducts();
      sorted &&
        product.sort((a, b) => {
          if (a.sale > b.sale) return -1;
          if (a.sale < b.sale) return 1;
          return 0;
        });
      if (sortby == "price") {
        product.sort((a, b) => {
          if (
            a.price - a.price * (a.sale / 100) >
            b.price - b.price * (b.sale / 100)
          )
            return -1;
          if (
            a.price - a.price * (a.sale / 100) <
            b.price - b.price * (b.sale / 100)
          )
            return 1;
          return 0;
        });
      } else if (sortby == "color") {
        product.sort((a, b) => {
          if (a.color > b.color) return -1;
          if (a.color < b.color) return 1;
          return 0;
        });
      } else if (sortby == "sale") {
        product.sort((a, b) => {
          if (a.sale > b.sale) return -1;
          if (a.sale < b.sale) return 1;
          return 0;
        });
      }
      num ? setproducts(product.slice(0, num)) : setproducts(product);
      setloading(false);
    }
    getproducts();
  }, [sortby]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-wrap">
          {needsort && <SortMenu setsortby={setsortby} />}
          {products.map((el) => (
            <Kiditem product={el} key={el.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Kidslist
