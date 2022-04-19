import React from "react";
import AboutSection from "../Organism/Dealer/AboutSection";
import DataSection from "../Organism/Dealer/DataSection";
import HeaderSection from "../Organism/Dealer/HeaderSection";

const Dealer=()=>{
        return(
                <>
<div className="px-60">
<HeaderSection/>
<DataSection/>
<AboutSection/>
</div>
                </>
        )
}

export default Dealer;