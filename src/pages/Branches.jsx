import React from "react";
import Map from "../components/Map";
import { useState, useEffect } from "react";
import Brancheslist from "../components/Brancheslist";
import { getAllBranches } from "../supabase/client";
function Branches() {
  let [branches, setbranches] = useState([]);
  useEffect(() => {
    async function getbranches() {
      const product = await getAllBranches();
      setbranches(product);
    }
    getbranches();
  }, []);
  return (
    <>
      <div className="w-4/5 flex flex-wrap mt-8 ">
        <header className="w-full  text-2xl mb-3 text-center">
          Our Branches
        </header>{" "}
        <div className="w-full md:w-2/3 h-screen ">
          <Map branches={branches} />
        </div>
        <div className="w-full md:w-1/3 md:overflow-scroll md:h-screen no-scrollbar ">
          <Brancheslist branches={branches} />
        </div>
      </div>
    </>
  );
}

export default Branches;
