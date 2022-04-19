import React from "react";
import { Accordion } from "react-bootstrap";
import DealerCard from "../../Atoms/Cards/DealerCard";
import img1 from "../../Asset/Image/1.jpg"
import img2 from "../../Asset/Image/2.jpg"
import img3 from "../../Asset/Image/3.jpg"
import adds2 from "../../Asset/Image/ads2.jpg"
import ad2 from '../../Asset/Image/ad2.png'
const DataSection = () => {


        const DATAMAP = [img1, img2, img3, img1, img2, img3]
        return (
                <>
                        <div>

                                {/* Header */}
                                <div className="grid grid-cols-2 gap-8 bg-gray-100 text-2xl py-2 px-2 mt-4">
                                        <div className="text-gray-500">
                                                <p className="mb-0"><b className="text-blue-500 font-semibold">Home</b> / <b className="text-blue-500 font-semibold">Products</b> / Accessories</p>
                                        </div>
                                        <div>
                                                <div className="float-right ">
                                                        <span className="text-sm float-right">
                                                                <select name="cars" className="px-1 py-2 text-xl btn btn-primary" id="cars">
                                                                        <option value="volvo">Sort by</option>
                                                                        <option value="saab">Low to High</option>
                                                                        <option value="mercedes">High to Low</option>
                                                                </select>
                                                        </span>
                                                </div>
                                        </div>
                                </div>

                                {/* DeatailData */}
                                <div className="grid grid-cols-4 gap-8 mt-4">
                                        <div className=" px-2   ">


                                                <div className="border-2 px-2 py-2 dealer ">
                                                        <p>Range:</p>
                                                        <input type="range" id="volume" name="volume" min="0" max="11" />
                                                        <p>Price:</p>
                                                        <Accordion defaultActiveKey={`0`} className="bg-white shadow-sm mt-10" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header>
                                                                                <span className="text-gray-700 text-lg font-semibold"> Property Type </span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                                                                <div className="px-1">

                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Apartmen   </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; House  </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Shop  </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Flat  </span></div>

                                                                                </div>
                                                                        </Accordion.Body>
                                                                </Accordion.Item>
                                                        </Accordion>


                                                        <Accordion defaultActiveKey={`0`} className="bg-white shadow-sm" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header>
                                                                                <span className="text-gray-700 text-lg font-semibold"> Loaction </span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                                                                <div className="px-1">

                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Dehradun   </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Almora  </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Sharanpur  </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Haridwar  </span></div>

                                                                                </div>
                                                                        </Accordion.Body>
                                                                </Accordion.Item>
                                                        </Accordion>



                                                </div>

                                                <div className="mt-4 sticky top-0">
                                                        <img src={adds2} />
                                                </div>


                                        </div>
                                        <div className="col-span-3">
                                                <div className="grid grid-cols-3 gap-8 p-4 bg-gray-200">
                                                        {DATAMAP.map((items, i) => (
                                                                <DealerCard image={items} />
                                                        ))} 
                                                </div>
                                                <div className="p-4 bg-gray-200">
                                                <img src={ad2}/>
                                                </div>
                                               

                                                <div className="grid grid-cols-3 gap-8 p-4 bg-gray-200">
                                                        {DATAMAP.map((items, i) => (
                                                                <DealerCard image={items} />
                                                        ))}
                                                        
                                                </div>
                                                <div className="p-4 bg-gray-200">
                                                <img src={ad2}/>
                                                </div>

                                                <div className="grid grid-cols-3 gap-8 p-4 bg-gray-200">
                                                        {DATAMAP.map((items, i) => (
                                                                <DealerCard image={items} />
                                                        ))}
                                                        
                                                </div>
                                                <div className="p-4 bg-gray-200">
                                               
                                                </div>
                                              
                                        </div>

                                </div>
                        </div>
                </>
        )
}

export default DataSection;