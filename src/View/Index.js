import React, { useEffect } from "react";
import HomeMenu from "../Molecule/HomeMenu.js/HomeMenu";
import CategorySection from "../Organism/Index.js/categorySection";
import MarketPlaceSection from "../Organism/Index.js/MarketPlaceSection";
import MenuSection from "../Organism/Index.js/MenuSection";
import ListSection from "../Organism/Index.js/ListingSection";
import ListingSection from "../Organism/Index.js/ListingSection";
import TrustedSection from "../Organism/Index.js/TrustedSection";



const Index=()=>{
        useEffect(()=>{
                window.scrollTo(0, 0);
              },[])
        return(
                <div>
<MenuSection/>
<CategorySection/>
<MarketPlaceSection/>
<ListingSection/>
<TrustedSection/>
                </div>
        )
}


export default Index