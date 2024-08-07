import { useState, useEffect } from "react";
import { getAllBranches } from "../supabase/client";
import React from "react";
import Branchitem from "./Branchitem";
function Brancheslist({branches}) {

  return <>
    {branches.map((el)=><Branchitem branch={el} key={el.id}/>)}
  </>;
}

export default Brancheslist;
