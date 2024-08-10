import { useEffect, useState } from "react";
import React from "react";
import { getAllProducts } from "../supabase/client";
import Products from "../components/Products";
function Sale() {
  let [products, setproducts] = useState([]);

  useEffect(() => {
    async function getproducts() {
      const product = await getAllProducts();
      setproducts(product);
    }
    getproducts();
  }, []);
  return (
    <>
      <div className="w-4/5 flex flex-wrap">
        <header className="w-full text-center text-3xl my-2">Sale</header>
        <Products sorted={true} needsort={true}/>
      </div>
    </>
  );
}

export default Sale;
