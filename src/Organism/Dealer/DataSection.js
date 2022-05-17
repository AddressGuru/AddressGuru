import React,{useState} from "react";
import { Accordion } from "react-bootstrap";
import DealerCard from "../../Atoms/Cards/DealerCard";
import img1 from "../../Asset/Image/1.jpg"
import img2 from "../../Asset/Image/2.jpg"
import img3 from "../../Asset/Image/3.jpg"
import adds2 from "../../Asset/Image/ads2.jpg"
import ad2 from '../../Asset/Image/ad2.png'
import { Modal } from "react-bootstrap";

const DataSection = () => {
        const [Job, setJOb] = useState(false);
        const [Result, setResult] = useState(false);
        const [Locality, setLocality] = useState(false);

       

        const DATAMAP = [img1, img2, img3, img1, img2, img3]
        return (
                <>
                        <div>

                                {/* Header */}
                                <div className="grid grid-cols-2 gap-8 bg-gray-100 text-2xl py-2 px-2 mt-2">
                                        <div className="text-gray-500">
                                                <p className="mb-0 text-sm"><b className="text-blue-500 font-semibold">Home</b> / <b className="text-blue-500 font-semibold">Products</b> / Accessories</p>
                                        </div>
                                        <div>
                                                <div className="float-right ">
                                                        <span className="text-xs float-right">
                                                                <select name="cars" className=" text-xs btn btn-primary sorted" id="cars">
                                                                        <option value="volvo">Sort by</option>
                                                                        <option value="saab">Low to High</option>
                                                                        <option value="mercedes">High to Low</option>
                                                                </select>
                                                        </span>
                                                </div>
                                        </div>
                                </div>


                                {/* FILTER MOBILE  */}
                                <div className="grid grid-cols-3 gap-2 lg:hidden pb-4">
                                <div>
                                        <button className="btn bg-blue-200 text-sm w-full" onClick={()=>setJOb(true)}>
                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Job Type</span>
                                        </button>
                                        <Modal show={Job} onHide={()=>setJOb(false)}>
                                                <Modal.Body>
                                                <Accordion defaultActiveKey={`0`} className="bg-blue-200 border-1 border-blue-200" >
                                                        <Accordion.Item eventKey="0">
                                                                <Accordion.Header>
                                                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Job Type</span>
                                                                </Accordion.Header>
                                                                <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                                                        <div className="px-1">

                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun </span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun </span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun</span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun </span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun </span></div>

                                                                        </div>
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                </Accordion>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                        <button variant="secondary" onClick={()=>setJOb(false)}>
                                                                Close
                                                        </button>

                                                </Modal.Footer>
                                        </Modal>
                                </div>

                                <div>
                                        <button className="btn bg-green-200 text-sm w-full" onClick={()=>setResult(true)}>
                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Top Result</span>
                                        </button>
                                        <Modal show={Result} onHide={()=>setResult(false)}>
                                                <Modal.Body>
                                                <Accordion defaultActiveKey={`0`} className="bg-green-200 border-1 border-green-200" >
                                                        <Accordion.Item eventKey="0">
                                                                <Accordion.Header>
                                                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Top Result</span>
                                                                </Accordion.Header>
                                                                <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                                                        <div className="px-1">

                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; at ghosi gali... </span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; at Ghosi Gali... </span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Dehradun..</span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Ajabpur Kalan </span></div>

                                                                        </div>
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                </Accordion>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                        <button variant="secondary" onClick={()=>setResult(false)}>
                                                                Close
                                                        </button>

                                                </Modal.Footer>
                                        </Modal>
                                </div>

                                <div>
                                        <button className="btn bg-yellow-200 text-sm w-full" onClick={()=>setLocality(true)}>
                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Locality</span>
                                        </button>
                                        <Modal show={Locality} onHide={()=>setLocality(false)}>
                                                
                                                <Modal.Body>
                                                <Accordion defaultActiveKey={`0`} className="bg-yellow-200 border-1 border-yellow-200" >
                                                        <Accordion.Item eventKey="0">
                                                                <Accordion.Header>
                                                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Locality</span>
                                                                </Accordion.Header>
                                                                <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                                                        <div className="px-1">

                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun </span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun </span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun</span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun </span></div>
                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Top 5 Flex Printers in Dehradun </span></div>

                                                                        </div>
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                </Accordion>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                        <button variant="secondary" onClick={()=>setLocality(false)}>
                                                                Close
                                                        </button>

                                                </Modal.Footer>
                                        </Modal>
                                </div>
                               
                        </div>





                                {/* DeatailData */}
                                <div className="grid grid-cols-4 gap-2 lg:gap-8  mt-2">
                                        <div className="hidden lg:block">


                                                <div className="border-2 px-2 py-2 dealer ">
                                                        <p>Range:</p>
                                                        <input type="range" id="volume" name="volume" min="0" max="11" />
                                                        <p>Price:</p>
                                                        <Accordion defaultActiveKey={`0`} className="bg-white shadow-sm mt-0" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header className="">
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
                                        <div className="col-span-4 lg:col-span-3 ">
                                                <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:gap-6 gap-2 p-2 lg:p-4 bg-gray-200">
                                                        {DATAMAP.map((items, i) => (
                                                                <DealerCard image={items} />
                                                        ))} 
                                                </div>
                                                <div className="p-4 bg-gray-200">
                                                <img src={ad2}/>
                                                </div>
                                               

                                                <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:gap-6 gap-2 p-2 lg:p-4 bg-gray-200">
                                                        {DATAMAP.map((items, i) => (
                                                                <DealerCard image={items} />
                                                        ))}
                                                        
                                                </div>
                                                <div className="p-4 bg-gray-200">
                                                <img src={ad2}/>
                                                </div>

                                                <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:gap-6 gap-2 p-2 lg:p-4 bg-gray-200">
                                                        {DATAMAP.map((items, i) => (
                                                                <DealerCard image={items} />
                                                        ))}
                                                        
                                                </div>
                                                <div className="p-4 bg-gray-200">
                                               
                                                </div>
                                        
                                        <div className="bg-gray-200 px-4">
                                               
                                        </div>
                                            
                                        </div>

                                </div>
                        </div>
                </>
        )
}

export default DataSection;