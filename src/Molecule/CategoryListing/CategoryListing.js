import CategoiesListCard from "../../Atoms/Cards/CategoriesListCard"
import dsom from "../../Asset/Image/dsom.jpg"
import Accordion from 'react-bootstrap/Accordion'


const CategoryListing = () => {

        return (
                <div className="grid grid-cols-4 gap-4 px-20">
                        <div className="col-span-3">
                                <CategoiesListCard />
                                <CategoiesListCard />
                                <CategoiesListCard />
                                <CategoiesListCard />
                                <CategoiesListCard />
                                <CategoiesListCard />
                                <CategoiesListCard />
                               
                        </div>
                        <div className="">
                                <div>
                                <button className="btn btn-primary w-full mb-2">
                                        Search Filter <i className="fa fa-filter"></i>
                                </button>

                                <Accordion defaultActiveKey={`0`} className="bg-gray-200" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header>
                                                                                <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Job Type</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body className="px-2 pt-2 bg-gray-100 text-gray-800 ">
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

                                                        <Accordion defaultActiveKey={`0`} className="bg-gray-200" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header>
                                                                                <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Top Result</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body className="px-2 pt-2 bg-gray-100 text-gray-800 ">
                                                                                <div className="px-1">

                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; at ghosi gali... </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; at Ghosi Gali... </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Dehradun..</span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Ajabpur Kalan </span></div>

                                                                                </div>
                                                                        </Accordion.Body>
                                                                </Accordion.Item>
                                                        </Accordion>

                                                        <Accordion defaultActiveKey={`0`} className="bg-gray-200" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header>
                                                                                <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Locality</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body className="px-2 pt-2 bg-gray-100 text-gray-800 ">
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


                                                        <Accordion defaultActiveKey={`0`} className="bg-gray-200" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header>
                                                                                <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Other cities</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body className="px-2 pt-2 bg-gray-100 text-gray-800 ">
                                                                                <div className="px-1">

                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Dehradun </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Haldwani </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Rudrapur</span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Haridwar </span></div>

                                                                                </div>
                                                                        </Accordion.Body>
                                                                </Accordion.Item>
                                                        </Accordion>

                                       


                                        
                                </div>
                                <div className="border-2 p-1">
                                        <img src={dsom} className="w-full" />
                                </div>

                        </div>
                </div>


        )
}


export default CategoryListing