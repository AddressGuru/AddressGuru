import React,{useEffect} from "react";
import MarketPlaceLandingSection from "../Organism/MaketPLace/MarketPlaceLandingSection";

const MarketLanding=()=>{
        useEffect(()=>{
                window.scrollTo(0, 0);
              },[])


        return(
               <div>
<MarketPlaceLandingSection/>
               </div>
        )
}


export default MarketLanding