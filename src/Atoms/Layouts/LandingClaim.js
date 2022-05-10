import React from "react";
import { Link } from "react-router-dom";


const LandingClaim = () => {
        return (
                <div className=" text-center bg-slate-100 border-2 border-white shadow-lg py-4 mt-2">

                        
                        <p className="text-center text-lg text-gray-800 font-bold">Is This Your Business ?</p>
                        <Link to="/claim"> <button className="  text-2xl  text-blue-500 font-bold"><i class="fa fa-hand-o-right" aria-hidden="true"></i>  Claim This Business</button></Link>
                </div>
        )
}

export default LandingClaim;