import React from "react";
import MobileMenu from "../Atoms/MobileMenu";
import ListingSection from "../Organism/CategoriesLanding/ListingSection";


const CategoriesLanding=()=>{
        return(
                <div className="bg-gray-100">
<ListingSection/>
<MobileMenu/>
                </div>
        )
}


export default CategoriesLanding