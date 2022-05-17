import React from "react";
import AboutSection from "../Organism/Dealer/AboutSection";
import DataSection from "../Organism/Dealer/DataSection";
import HeaderSection from "../Organism/Dealer/HeaderSection";

const Dealer=()=>{
        return(
                <>
<div className="container ">
<div className="lg:px-40">
<HeaderSection/>
<DataSection/>
<AboutSection/>
</div>
</div>
                </>
        )
}

export default Dealer;