import React,{useEffect} from "react";
import LandingSection from "../Organism/Landing/LandingSection";

const Landing=()=>{

        useEffect(()=>{
                window.scrollTo(0, 0);
              },[])

        return(
                <div>
<LandingSection/>
                </div>
        )
}


export default Landing