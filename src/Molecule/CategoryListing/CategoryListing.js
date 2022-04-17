import CategoiesListCard from "../../Atoms/Cards/CategoriesListCard"
import dsom from "../../Asset/Image/dsom.jpg"
import Accordion from 'react-bootstrap/Accordion'


const CategoryListing = () => {

        return (
                <div className="grid grid-cols-4 gap-4 px-80">
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
                                        <Accordion defaultActiveKey={`0`} className="bg-gray-800" >
                                                <Accordion.Item eventKey="0">
                                                        <Accordion.Header>
                                                                <i className="fa fa-trophy fa-fw"></i>&nbsp;  Top Results
                                                        </Accordion.Header>
                                                        <Accordion.Body className="px-4 pt-2 bg-gray-700 ">
                                                                <div className="px-1">
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;  Top 5 Flex Printers in Dehradun</span><br />
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;  Top 5 Flex Printers in Dehradun</span><br />
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;  Top 5 Flex Printers in Dehradun</span><br />
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;  Top 5 Flex Printers in Dehradun</span><br />
                                                                </div>
                                                        </Accordion.Body>
                                                </Accordion.Item>
                                        </Accordion>

                                        <Accordion defaultActiveKey={`0`} className="bg-gray-800" >
                                                <Accordion.Item eventKey="0">
                                                        <Accordion.Header>
                                                                <i className="fa fa-map-marker fa-fw"></i>&nbsp;  Locality
                                                        </Accordion.Header>
                                                        <Accordion.Body className="px-4 pt-2 bg-gray-700 ">
                                                                <div className="px-1">
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;   at ghosi gali...n</span><br />
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;   at Ghosi Gali...</span><br />
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;   Dehradun...</span><br />
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;  Ajabpur Kalan</span><br />
                                                                </div>
                                                        </Accordion.Body>
                                                </Accordion.Item>
                                        </Accordion>


                                        <Accordion defaultActiveKey={`0`} className="bg-gray-800" >
                                                <Accordion.Item eventKey="0">
                                                        <Accordion.Header>
                                                                <i className="fa fa-building-o fa-fw"></i>&nbsp;  Other Cities
                                                        </Accordion.Header>
                                                        <Accordion.Body className="px-4 pt-2 bg-gray-700 ">
                                                                <div className="px-1">
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp; Dehradun</span><br />
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;   Haldwani</span><br />
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;  Rudrapur</span><br />
                                                                        <input type={`radio`} /><span className="text-sm">&nbsp;   Haridwar     </span><br />
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