import listing from "../../Asset/Image/listing.png"

const ListingCards = (props) => {
        const data = props.data
        return (
                <>


                        <div className="grid grid-cols-4 border-2 border-gray-200 rounded-xl hover:shadow-2xl hover:scale-105">
                                <div className="px-1 py-1">
                                        <img src={props.image1} className="border-2 shadow-xl border-gray-100 rounded-lg 
                                        
                                        
                                        
                                        
                                        h-full" />
                                </div>
                                <div className="col-span-3 py-2">
                                        <h4 className="sm:text-2xl md:text-sm sm:text-gray-600 mb-0 font-semibold">{data.title}</h4>
                                        <i className=" fa fa-cogs sm:text-xl md:text-sm text-blue-500" /><span className="text-blue-500 md:text-sm  sm:text-xl text-lg" > Home Service</span>
                                        <p className="text-xs text-gray-500 font-semibold sm:text-sm text-xs xl:text-xs">4 Days to go</p>
                                </div>
                        </div>
                </>
        )
}


export default ListingCards