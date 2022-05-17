import { useContext, useState, useEffect } from "react"
import { Context } from "../../Api/MarketPlace"
import MainMenuData from "../../Asset/Sampledata/HomePageMenu"
import MarketPlaceCards from "../../Atoms/Cards/MarketPlaceCards"
import marketplace from "../../Asset/Image/marketplace.png"
import Accordion from 'react-bootstrap/Accordion'
import { Modal } from "react-bootstrap"


const MarketPlaceInner = () => {

        // --------------------ContextAPI---------------------
        const { value1, value2 } = useContext(Context)
        const [data, setData] = value1;
        const [load, setLoad] = value2;
        // --------------------ContextAPI---------------------


        // ----------------------useState----------------------
        const [market, setMarket] = useState([])
        const [status, setstatus] = useState(false)
        // ----------------------useState----------------------


        // SampleData
        let Product = []
        const [Removed, setRemoved] = useState([])
        // SampleData

        // -----------------function--------------------
        function ProductShow(e) {
                let checked = e.target.checked
                let value = e.target.value;
                { checked ? Product.push(value) : Product = Product.filter(items => items !== value) }
                setRemoved(checked ? Removed.concat(Product) : Removed.filter(items => items != value))
        }
        // -----------------function--------------------



        // --------------------------useeffect------------------------
        function GetData() {
                var requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                };

                fetch("https://www.addressguru.in/api/marketplace/products?init=1&from=0&take=296", requestOptions)
                        .then(response => response.json())
                        .then(result => {
                                setMarket(result)
                                setstatus(true)
                        })
                        .catch(error => console.log('error', error));
        }
        // --------------------------useeffect------------------------

        // --------------------------useeffect------------------------
        useEffect(() => {
                GetData()
        }, [])
        // --------------------------useeffect------------------------


        const [Job, setJOb] = useState(false);
        const [Result, setResult] = useState(false);
        const [Locality, setLocality] = useState(false);



        return (
                <div className="bg-slate-50 mt-8">




                        <div className="lg:mb-8 mb-4">
                                <img src={marketplace} />
                        </div>

                        <div className="grid grid-cols-3 gap-2 lg:hidden pb-4 px-2">
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


                        {load ? <div className="lg:px-40 mb-0">
                                {Removed.length > 0 ? <div>{Removed.map((items, i) => (
                                        <button className="border-2 bg-white py-1 rounded-2xl px-3 text-xs mr-2 ">{items}
                                        </button>
                                ))}
                                        <hr />
                                </div> : <p></p>}


                        </div> : <div></div>}

                        <div className="container">
                                <div className="grid grid-cols-4 gap-4 pb-10 lg:px-40 ">

                                        {load ?
                                                <div className="hidden lg:block">
                                                        <div className="px-1  mb-0">
                                                                <span className="font-semibold text-sm">Home/ Market Place</span>
                                                        </div>
                                                        <hr className="mt-1" />
                                                        <Accordion defaultActiveKey={`0`} className="bg-white" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header>
                                                                                <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Products</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                                                                <div className="px-1">
                                                                                        {data.map((items, i) => (
                                                                                                <div className="mb-1"> <input type={`checkbox`} name="Product" value={items.name} onClick={(e) => ProductShow(e)} /><span className="font-semibold text-gray-600 text-sm">&nbsp;  {items.name} ({items.products})</span></div>
                                                                                        ))}

                                                                                </div>
                                                                        </Accordion.Body>
                                                                </Accordion.Item>
                                                        </Accordion>

                                                        <Accordion defaultActiveKey={`0`} className="bg-white shadow-sm" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header>
                                                                                <i class="fa fa-calendar text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Recent</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                                                                <div className="px-1">

                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Last 7 Days </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Last 15 Days </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Last 30 Days </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Last 2 Months </span></div>

                                                                                </div>
                                                                        </Accordion.Body>
                                                                </Accordion.Item>
                                                        </Accordion>

                                                        <Accordion defaultActiveKey={`0`} className="bg-white shadow-sm" >
                                                                <Accordion.Item eventKey="0">
                                                                        <Accordion.Header>
                                                                                <i class="fa fa-credit-card-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-700 text-lg font-semibold"> Price </span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                                                                <div className="px-1">

                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; 0- 5,000 (₹)   </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; 5,000- 10,000 (₹)  </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; 10,000- 20,000 (₹)  </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; 20,000- 50,000 (₹)  </span></div>
                                                                                        <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; 50,000- 100,000 (₹)  </span></div>

                                                                                </div>
                                                                        </Accordion.Body>
                                                                </Accordion.Item>
                                                        </Accordion>



                                                </div> : <div></div>}


                                        {status ? <div className="col-span-4 lg:col-span-3">
                                                <div className="grid grid-cols-2 gap-2">
                                                        <div>
                                                                <span className="text-sm"> 10,000 searches in <b>Dehradun</b></span>
                                                        </div>
                                                        <div>
                                                                <span className="text-sm float-right"> <i class="fa fa-bars" aria-hidden="true"></i> Sort by: <select name="cars" id="cars">
                                                                        <option value="volvo">Price</option>
                                                                        <option value="saab">Date</option>
                                                                        <option value="mercedes">Recomended</option>
                                                                </select>  </span>
                                                        </div>
                                                </div>
                                                <hr className="mt-1" />
                                                <div className="grid grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
                                                        {market.records.sort((a, b) => b.package - a.package).map((items, i) => (
                                                                <MarketPlaceCards data={items} />
                                                        ))}
                                                </div>

                                        </div> : <div></div>}

                                </div>
                        </div>
                </div>


        )
}


export default MarketPlaceInner