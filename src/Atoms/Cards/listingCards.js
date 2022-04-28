import listing from "../../Asset/Image/listing.png"

const ListingCards = (props) => {
        const data = props.data
        return (
                <>


                        <div className="grid grid-cols-9 -mb-3 border-2 border-gray-200  hover:shadow-2xl hover:scale-105">
                                <div className="col-span-2  ">
                                        <img src={props.image1} className="border-2 shadow-xl border-gray-100  h-full" />
                                </div>
                                <div className="col-span-7 py-2 px-2">
                                        <h6 className=" sm:text-gray-600 lg:text-sm mb-0 lg:font-semibold">{data.title}</h6>
                                        <i className=" fa fa-cogs text-sm text-blue-500" /><span className="text-blue-500 text-xs " > Home Service</span>
                                        <p className="text-xs text-gray-500 font-semibold  text-xs xl:text-xs">4 Days to go</p>
                                </div>
                        </div>
                </>
        )
}


export default ListingCards