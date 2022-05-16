import marketlist from "../../Asset/Image/marketlist.jpg"

const MarketPlaceCards = (props) => {
     const data = props.data
     return (
          <>

               {data.package == 0 ? 
               <div className=" px-2 pt-2 pb-2 bg-white border-b-gray-200 shadow-sm border-b-2 rounded-sm border-b-2 rounded-sm relative ">
                    <div className="flex justify-center">
                         <img src={marketlist} className="lg:w-1/2 w-1/2" width={`auto`} height={`100%`} />
                    </div>
                    <div className="px-2 mb-2 mt-2 relative pb-1">
                        
                         <p className="text-left mt-0 lg:text-xs h-11 text-xs break-all ">{data.title}</p>
                         <h3 className="lg:text-lg text-lg font-semibold mb-0 lg:font-bold">{data.amount == null ? data.price : <span>₹ {data.amount}</span>}</h3>
                    </div>

                    <div className=" w-full 2xl:grid 2xl:grid-cols-3 grid grid-cols-1">
                    <div className="col-span-2 mb-0 text-right lg:text-right 2xl:text-left ">
                              <button className=" font-semibold text-gray-500 px-2 rounded-sm very-small MarketListFooter ">
                                   <i className="fa fa-map-marker text-gray-800" /> {data.city}, {data.state}
                              </button>
                         </div>
                         <div className="col-span-1 text-right  ">
                              <button className=" font-semibold text-gray-800  rounded-sm very-small  ">
                                   <i className="fa fa-calendar text-blue-500 MarketListFooter " /> 1 Year Ago
                              </button>
                         </div>
                    </div>
               </div> :
                    <div className=" px-2 pt-3 pb-2 bg-white shadow-lg rounded-sm border-b-4 border-red-500 rounded-sm">
                         <div className="flex justify-center">
                              <img src={`https://www.addressguru.in/images/` + data.images[0].slice(0, 9) + ".crdownload"} className="w-full" />
                         </div>
                         <div className="px-2">
                              <h3 className="text-xl font-bold">{data.amount}</h3>
                              <button className="bg-red-100 font-semibold float-right text-gray-800 px-2 py-1 rounded-sm text-sm ">
                                   <i className="fa fa-map-marker text-blue-500" /> Featured
                              </button>
                              <p className="text-left text-sm  mt-2">{data.title}</p>
                         </div>




                         <div className="grid grid-cols-3 px-2 mt-8 text-xs ">
                              <div className="col-span-2 mb-0 ">
                                   <button className="bg-red-400 font-semibold text-white px-2 rounded-sm very-small ">
                                        <i className="fa fa-map-marker " /> {data.city}, {data.state}
                                   </button>
                              </div>
                              <div className="text-right mb-0">
                                   <button className="bg-blue-100 font-semibold text-gray-800 px-2 rounded-sm very-small ">
                                        <i className="fa fa-map-marker text-blue-500" /> 1 Year Ago
                                   </button>
                              </div>
                         </div>
                    </div>}
          </>
     )
}


export default MarketPlaceCards