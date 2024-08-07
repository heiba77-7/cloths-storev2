import React from "react";
function Loader() {
  return (
    <div className=" flex justify-center w-full items-center bg-white h-screen ">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 mx-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 mx-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 mx-2 bg-black rounded-full animate-bounce"></div>
    </div>
  );
}

export default Loader;
