import React,{useEffect} from "react";
import Form from "../Atoms/Form/Form";
import PartnerForm from "../Atoms/Form/PartnerForm";
import ListingBenefit from "../Atoms/ListingBenifits";

const Partner=()=>{
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

        return(
<div>
<div className="grid grid-cols-7 gap-16 py-10 px-40 bg-gray-100  partner ">
<div className="col-span-2">
<PartnerForm/>
</div>
<div className="col-span-4">
<div className="bg-blue-500 text-white text-3xl p-4 font-bold">
More than 3108 partners registered
</div>
<div className="bg-white p-5">
<ListingBenefit/>
</div>
</div>
                </div>

                <div>
               
                </div>
</div>
        )
}


export default Partner