import { Link } from "react-router-dom"
import listing from "../../Asset/Image/landing1.png"

const CategoiesListCard = (props) => {

        return (
                <>


                        <div className="grid grid-cols-12 lg:grid lg:grid-cols-4 border-b-2 bg-white rounded-sm ">
                                <div className="col-span-4 lg:col-span-1">
                                        <img src={listing} className=" shadow-xl border-gray-100 rounded-sm h-full" />
                                </div>
                                <div className="col-span-8 lg:col-span-3 py-2 ml-4">
                                        <div className="grid grid-cols-4">
                                                <div className="lg:col-span-3 col-span-4 lg:border-r-2 lg:pr-2">
                                                        <h4 className=" font-semibold lg:text-xl lg:mb-3 mb-1 lg:font-normal text-blue-700">Four Color Print Solution | Printing Service in Dehradun</h4>
                                                        <p className="text-gray-500 text-xs lg:text-sm whitespace-nowrap text-ellipsis overflow-hidden" > <i className=" fa fa-map-marker fa-fw text-xs lg:text-sm text-gray-500 lg:inline hidden " /> Shop No 19, K C City Centre Dispensary Road, Dehradun</p>
                                                        <p className="text-gray-500 text-xs lg:text-sm lg:block hidden" > <i className="fa fa-tags fa-fw text-xs lg:text-sm text-gray-500" /> Flex Printers</p>
                                                        <p className="text-xs lg:text-sm text-gray-500 lg:block hidden mb-1 mt-2 font-semibold"><b>Services</b>: printing press, banner printers, printers for visitin, flex printing servic, </p>
                                                        <div className="lg:hidden block">
                                                                <div className="mb-2">
                                                                        <i className="fa fa-star text-sm text-yellow-400 "></i>
                                                                        <i className="fa fa-star text-sm text-yellow-400 "></i>
                                                                        <i className="fa fa-star text-sm text-yellow-400 "></i>
                                                                        <i className="fa fa-star text-sm text-yellow-400 "></i>
                                                                        <i className="fa fa-star text-sm text-yellow-400 "></i>
                                                                        <button className="bg-green-700 px-2 ml-1 rounded-sm text-xs text-white">5</button>
                                                                </div>
                                                                <div className="grid grid-cols-12">
                                                                        <div className="col-span-6 px-2"><button className=" w-full py-1 rounded-sm text-black border-1 border-orange-600 text-xs bg-white"><i className="fa fa-phone fa-fw"></i> Call Now</button></div>
                                                                        <div className="px-2 col-span-6 px-2" ><Link to="/third"><button className="w-full py-1 rounded-sm text-white border-1 border-blue-600 text-xs bg-blue-600">View Details</button></Link></div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="h-full grid grid-cols-1  content-center stars-review ">
                                                        <div className="mb-2 justify-center px-2 w-full">
                                                                <i className="fa fa-star text-yellow-400 text-xs lg:text-sm"></i>
                                                                <i className="fa fa-star text-yellow-400 text-xs lg:text-sm"></i>
                                                                <i className="fa fa-star text-yellow-400 text-xs lg:text-sm"></i>
                                                                <i className="fa fa-star text-yellow-400 text-xs lg:text-sm"></i>
                                                                <i className="fa fa-star text-yellow-400 text-xs lg:text-sm"></i>
                                                                <button className="bg-green-700 px-2 ml-1 rounded-sm text-sm text-white">5</button>
                                                                <Link to="/third"><button className=" border-2 border-blue-300 text-xs py-1 px-4 hover:bg-blue-500 hover:text-white  rounded-sm">View  More</button></Link>
                                                        </div>


                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}


export default CategoiesListCard