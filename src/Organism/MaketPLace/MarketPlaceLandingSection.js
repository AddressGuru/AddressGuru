import MarketPlaceAPI from "../../Api/MarketPlace"
import MarketPlaceInner from "../../Molecule/MarketPlace/MarketPlaceInner"


const MarketPlaceLandingSection=()=>{
        return(
             <div>
          <MarketPlaceAPI>
<MarketPlaceInner/>
</MarketPlaceAPI>
             </div>

               
        )
}


export default MarketPlaceLandingSection