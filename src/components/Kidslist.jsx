import React from "react";
import { getAllKidsProducts } from "../supabase/client";
import { useState,useEffect } from "react";
import Kiditem from "./Kiditem";
import Loader from "./Loader";
function Kidslist({sorted,num}) {
      let [products, setproducts] = useState([]);
      let [loading,setloading] = useState(true)
  useEffect(() => {
    async function getproducts() {
      setloading(true)
      const product = await getAllKidsProducts();
      sorted&&product.sort((a,b)=>{
        if(a.sale>b.sale)return -1;
        if(a.sale<b.sale)return 1;
        return 0;
      })
      num?setproducts(product.slice(0,num)):
      setproducts(product);
      setloading(false)
    }
    getproducts();
  }, []);
    return (
        <>
        {loading?<Loader/>:products.map((el)=><Kiditem product={el} key={el.id}/>)}
        </>
    )
}

export default Kidslist
