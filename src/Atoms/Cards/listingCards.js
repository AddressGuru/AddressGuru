import listing from "../../Asset/Image/listing.png"

const ListingCards=(props)=>{
const data= props.data
        return(
             <>


<div className="grid grid-cols-4 border-2 border-gray-200 rounded-xl hover:shadow-2xl hover:scale-105">
<div className="px-2 py-2">
<img src={`https://www.addressguru.in/images/`+data.images[0].slice(0,9)+".crdownload"} className="border-2 shadow-xl border-gray-100 rounded-xl"/>
</div>
<div className="col-span-3 py-2">
<h4 className="text-sm mb-0 font-semibold">{data.title}</h4>
<i className=" fa fa-cogs text-sm text-blue-500"/><span className="text-blue-500 text-sm" > Home Service</span>
<p className="text-xs text-gray-500 font-semibold">4 Days to go</p>
</div>
</div>
             </>   
        )
}


export default ListingCards