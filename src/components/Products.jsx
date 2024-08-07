import { useState, useEffect } from "react";
import { getAllProducts } from "../supabase/client";
import ProductCard from "./ProductCard";
import React from "react";
import Loader from "./Loader"
function Products({ sorted, num }) {
  let [products, setproducts] = useState([]);
  const [loading,setloading]=useState(true)
  useEffect(() => {
    async function getproducts() {
      setloading(true)
      const product = await getAllProducts();
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
  return <>
    {loading?<Loader/>:products.map(el=><ProductCard product={el} key={el.id}/>)}
  </>
}

export default Products;
