import listing from "../../Asset/Image/listing.png"

const CategoiesListCard=(props)=>{

        return(
             <>


<div className="grid grid-cols-4 border-2 mb-4 border-gray-200 rounded-xl hover:shadow-2xl ">
<div className="px-2 py-2">
<img src={listing} className="border-2 shadow-xl border-gray-100 rounded-xl"/>
</div>
<div className="col-span-3 py-2">
<div className="grid grid-cols-4">
<div className="col-span-3 border-r-2">
<h4 className="text-2xl mb-3 font-semibold">Four Color Print Solution | Printing Service in Dehradun</h4>
<i className=" fa fa-map-marker fa-fw text-sm text-blue-500"/><span className="text-blue-500 text-sm" > Shop No 19, K C City Centre Dispensary Road, Dehra...</span><br/>
<i className="fa fa-tags fa-fw text-sm text-blue-500"/><span className="text-blue-500 text-sm" >  Flex Printers</span>
<p className="text-sm text-gray-500 mb-1 mt-2 font-semibold"><b>Services</b>: printing press, banner printers, printers for visitin, flex printing servic, </p>
       
        <i className="fa fa-star text-yellow-400 shadow-2xl"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
       
        <br/>
  

</div>
<div className="py-20 pl-10">
<button className="btn btn-primary ">View  More</button>

</div>
</div>
</div>
</div>
             </>   
        )
}


export default CategoiesListCard