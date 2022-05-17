import React from "react";

const DealerCard = (props) => {
        return (
                <div className="shadow-xl bg-white">
                        <div className="relative">
                                <button className="view_dealar_buttom absolute right-2 top-2 ">8 People Intrested</button>
                                <img src={props.image} />
                        </div>
                        <div className="pt-4 pb-1 px-3">
                                <h2 className="text-gray-800 text-sm lg:text-lg font-semibold h-16">1 BHK Available for Rent</h2>
                                <div className=" ">
                                <div className=" relative bottom-0">
                                <div className="grid grid-cols-2 text-sm lg:text-lg">
                                        <div>
                                                <p className="text-xs lg:text-lg">Apartmen</p>
                                        </div>
                                        <div>
                                                <p className="float-right text-xs lg:text-lg">1000 ft2</p>
                                        </div>
                                </div>
                                <div className="grid grid-cols-2 my-2">
                                        <div>
                                                <p className="text-xs lg:text-lg">12,0000</p>
                                        </div>
                                        <div className="" >
                                                <button className="view_button text-xs lg:text-lg">VIEW</button>
                                        </div>
                                </div>
                                </div>
                                </div>


                        </div>
                </div>
        )
}

export default DealerCard