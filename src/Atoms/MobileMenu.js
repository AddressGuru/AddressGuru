import React from "react";

const MobileMenu = () => {
        return (
                <>
                        <div className="lg:hidden ">
                                <div className="grid grid-cols-5 fixed w-full z-50 bg-gray-100 bottom-0">
                                        <div className="text-center pt-2 pb-2 border-2 relative">
                                                <i className="fa fa-home fa-lg"></i>
                                                <p className="text-xs text-gray-500 font-semibold mb-0 mt-2">Home</p>
                                        </div>
                                        <div className="text-center pt-2 border-2">
                                                <i className="fa fa-search fa-lg"></i>
                                                <p className="text-xs text-gray-500 font-semibold mb-0 mt-2">Jobs</p>
                                        </div>
                                        <div className="text-center pt-2 border-2">
                                             <i className="fa fa-plus-circle fa-3x relative text-red-500 bottom-6"></i>
                                                <p className="text-xs text-gray-500 font-semibold mb-0 -mt-4">Post Free Ad</p>
                                        </div>
                                        <div className="text-center pt-2 border-2">
                                                <i className="fa fa-shopping-cart fa-lg"></i>
                                                <p className="text-xs text-gray-500 font-semibold mb-0 mt-2">Marketplace</p>
                                        </div>
                                        <div className="text-center pt-2 border-2">
                                                <i className="fa fa-sign-out fa-lg"></i>
                                                <p className="text-xs text-gray-500 font-semibold mb-0 mt-2">Login</p>
                                        </div>

                                </div>
                        </div>

                </>
        )
}
export default MobileMenu;