import React from "react";
function SortMenu({setsortby}) {
  return (
    <div className="w-full my-4 text-md md:text-xl">
      <select id="cars" name="cars" onChange={(e)=>setsortby(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="sale">Sale</option>
        <option value="color">Color</option>
      </select>
    </div>
  );
}

export default SortMenu;
