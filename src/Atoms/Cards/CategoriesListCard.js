import { Link } from "react-router-dom"
import listing from "../../Asset/Image/listing.png"

const CategoiesListCard=(props)=>{

        return(
             <>


<div className="grid grid-cols-4 border-b-2 bg-white rounded-sm ">
<div className=" ">
<img src={listing} className="border-2 shadow-xl border-gray-100 rounded-sm h-full"/>
</div>
<div className="col-span-3 py-2 ml-4">
<div className="grid grid-cols-4">
<div className="col-span-3 border-r-2 pr-2">
<h4 className="text-xl mb-3 font-normal text-blue-700">Four Color Print Solution | Printing Service in Dehradun</h4>
<i className=" fa fa-map-marker fa-fw text-sm text-gray-500"/><span className="text-gray-500 text-sm" > Shop No 19, K C City Centre Dispensary Road, Dehra...</span><br/>
<i className="fa fa-tags fa-fw text-sm text-gray-500"/><span className="text-gray-500 text-sm" >  Flex Printers</span>
<p className="text-sm text-gray-500 mb-1 mt-2 font-semibold"><b>Services</b>: printing press, banner printers, printers for visitin, flex printing servic, </p>
       
       
  

</div>
<div className="h-full grid grid-cols-1  content-center ml-6">
<div className="mb-2">
<i className="fa fa-star text-yellow-400 shadow-2xl"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
<button className="bg-green-700 px-2 ml-1 rounded-sm text-sm text-white">5</button>
</div>
<Link to="/third"><button className="btn btn-primary ">View  More</button></Link>

</div>
</div>
</div>
</div>
             </>   
        )
}


export default CategoiesListCard