import React from "react"
import { Link } from "react-router-dom"
function Branchitem({branch}) {
    return (
        <div className="w-full px-3 md:w-1/3 my-4 list-none">
            <p className="w-full text-sm md:text-xs">{branch.place}</p>
            <div className="w-full"><span className="text-md md:text-sm">Tel : </span><p className="inline text-sm">{branch.phone}</p></div>
            <span className="w-1/12 text-sm md:text-xs">Location : </span><Link to={branch.location} className="inline text-xs">{branch.location}</Link>
        </div>
    )
}

export default Branchitem
