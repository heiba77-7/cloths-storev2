import React from "react";
import Kidslist from "../components/Kidslist";
function Kids() {
  return (
    <div className="w-4/5 flex flex-wrap">
      <header className="w-full text-center text-3xl my-2">Kids</header>
      <Kidslist needsort={true} />
    </div>
  );
}

export default Kids;
