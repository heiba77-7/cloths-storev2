import React, { useState } from "react";

function Counter() {
  const [value, setvalue] = useState(0);
  return (
    <div className="w-full h-1/6 mt-4 flex">
      <button className="w-1/3 text-center content-center border-[1px] border-black" onClick={()=>{value>0?setvalue(value-1):null}}>
        -
      </button>
      <div className="w-1/3 text-center  content-center">{value}</div>
      <button className="w-1/3 text-center content-center border-[1px] border-black"onClick={()=>{setvalue(value+1)}}>
        +
      </button>
    </div>
  );
}

export default Counter;
