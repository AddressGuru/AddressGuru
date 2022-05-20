import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import jobBanner from "../Asset/Image/jobbanner.jpg"
import ScrollAnimation from 'react-animate-on-scroll'
import MobileMenu from "../Atoms/MobileMenu";
import { Modal } from "react-bootstrap";


const Job = () => {
    const Count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    const freeAllbatch = []
    const blogsts = true;
    if (blogsts == true) {
        const chunkSize = 10
        const arr = Count
        const groups = arr
            .map((e, i) => {
                return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null
            })
            .filter((e) => {
                return e
            })
        freeAllbatch.push(groups)

    }

    const [pagination_st, setPaginationst] = useState(0)
    const [parinum, setParinum] = useState([])

    function setPaginationLeft(e) {
        if (pagination_st == 0) {
        } else {
            setPaginationst(pagination_st - 1)
        }
    }

    function setPaginationRight(e) {
        if (pagination_st == freeAllbatch[0].length - 1) {
        } else {
            setPaginationst(pagination_st + 1)
        }
    }


    const [Job, setJOb] = useState(false);
    const [Result, setResult] = useState(false);
    const [Locality, setLocality] = useState(false);

   

    console.log("check", freeAllbatch)
    return (
        <>



            <div className="bg-gray-100">
          
                <div className="container ">
                <div className="grid grid-cols-3 gap-2 lg:hidden  py-4">
                                <div>
                                        <button className="btn bg-blue-200 text-xs w-full" onClick={()=>setJOb(true)}>
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
                                        <button className="btn bg-green-200 text-xs w-full" onClick={()=>setResult(true)}>
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
                                        <button className="btn bg-yellow-200 text-xs w-full" onClick={()=>setLocality(true)}>
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
                    <div className="grid grid-cols-5 gap-4 lg:py-10 lg:px-40">
                        <div className="lg:block hidden">
                            <div>
                                <div className="px-1  mb-0">
                                    <span className="font-semibold text-sm">Home/ Market Place</span>
                                </div>
                                <hr className="mt-1" />
                                <Accordion defaultActiveKey={`0`} className="bg-white" >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Job Type</span>
                                        </Accordion.Header>
                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                            <div className="px-1">

                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; ALL (50) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Full Time (48) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Part Time (1) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Contract (0) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Temporary (0) </span></div>

                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion defaultActiveKey={`0`} className="bg-white shadow-sm" >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <i class="fa fa-calendar text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Location</span>
                                        </Accordion.Header>
                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                            <div className="px-1">

                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Hyderabad (17) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Mumbai (50) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Bengaluru (50) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Dehradun (273) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; chennai (22) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; palai (1) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Kochi (6) </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Vshakaptnam (7) </span></div>

                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion defaultActiveKey={`0`} className="bg-white shadow-sm" >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <i class="fa fa-credit-card-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-700 text-lg font-semibold"> Salary Period </span>
                                        </Accordion.Header>
                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                            <div className="px-1">

                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Hourly (0)   </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Monthly (49)  </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Weekly (0)  </span></div>
                                                <div className="mb-1"> <input type={`checkbox`} name="Product" /><span className="font-semibold text-gray-600 text-sm">&nbsp; Yearly (1)  </span></div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>



                            </div>
                        </div>


                        <div className="col-span-5 lg:col-span-3">


                            {freeAllbatch[0].length > 0 ? (
                                freeAllbatch[0][pagination_st].map((item, index) => (
                                    <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6 * index} animateOnce={true} className='col-12 mb-4'>
                                        <div className="bg-white relative px-4 py-4 mt-2 rounded-sm">
                                            <div className="lg:grid lg:grid-cols-6 grid grid-cols-7">
                                                <div className="col-span-5">
                                                    <h2 className="lg:text-xl text-sm text-gray-700">Accountant Supervisore / Executive (Hotel BAckground Onlu)</h2>
                                                    <p className="lg:text-sm text-xs text-gray-500 mt-1 mb-2">Lp villa  by LP Hotel a uni of M/S Motel Place </p>
                                                    <br/>
                                                    <div className="grid grid-cols-3 bottom-2 absolute">
                                                        <span className="mb-2 lg:col-span-1 col-span-2 text-xs lg:text-sm"><b className="text-gray-600  "> <i class="fa fa-briefcase" aria-hidden="true"></i> Job Type: </b> Full Time </span>
                                                        <span className="lg:col-span-2 col-span-3 text-xs lg:text-sm "><b className="text-gray-600 "><i class="fa fa-money" aria-hidden="true"></i> Salary: </b> 10,000 -15,000 / Monthly </span>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 lg:col-span-1 text-center">
                                                    <img src="https://www.addressguru.in/images/594022280.crdownload" className="w-100 border-2 rounded-sm" />
                                                    <span className="text-gray-500 text-xs lg:text-lg"> <b> <i class="fa fa-calendar" aria-hidden="true"></i> </b> 1 Week Ago</span>
                                                </div>
                                            </div>
                                            <div>


                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                ))
                            ) : ""}

                            {freeAllbatch[0].length > 0 ? (
                                <div className='col-12 pt-3'>
                                    <nav className="text-center">
                                        <ul className="pagination justify-content-center blog_bxrowpagi flex-wrap mb-0">
                                            <li
                                                className={
                                                    'nv page-item itemnv-1' +
                                                    (pagination_st == 0
                                                        ? ' disabled'
                                                        : '')
                                                    + (freeAllbatch[0].length == 1 ? ' d-none' : '')
                                                }
                                            >
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={() => {
                                                        setPaginationst(0)
                                                    }}
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true">
                                                        &laquo;
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className={
                                                    'nv page-item itemnv-2' +
                                                    (pagination_st == 0
                                                        ? ' disabled'
                                                        : '')
                                                    + (freeAllbatch[0].length == 1 ? ' d-none' : '')
                                                }
                                            >
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={(e) => {
                                                        setPaginationLeft(e)
                                                    }}
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true">‹</span>
                                                </a>
                                            </li>

                                            {/*------ pagination map ------*/}
                                            {new Array(freeAllbatch[0].length - 1)
                                                .fill()
                                                .map((_, index) => (
                                                    <li
                                                        className={
                                                            'page-item dots' +
                                                            (pagination_st == index
                                                                ? ' active'
                                                                : '') +
                                                            (pagination_st == index
                                                                ? ' activedot'
                                                                : '') +
                                                            (pagination_st - 1 == index
                                                                ? ' activedot'
                                                                : '') +
                                                            (pagination_st + 1 == index
                                                                ? ' activedot'
                                                                : '') +
                                                            (pagination_st - 2 == index
                                                                ? ' activedot'
                                                                : '') +
                                                            (pagination_st + 2 == index
                                                                ? ' activedot'
                                                                : '')
                                                        }>
                                                        <a
                                                            className="page-link"
                                                            href={void 0}
                                                            onClick={() => {
                                                                setPaginationst(index)
                                                            }}
                                                        >
                                                            {index + 1}
                                                        </a>
                                                    </li>
                                                ))}




                                            {/* last item */}
                                            <li
                                                className={
                                                    'page-item dots' +
                                                    (pagination_st ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' active'
                                                        : '') +
                                                    (pagination_st ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '') +
                                                    (pagination_st - 1 ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '') +
                                                    (pagination_st + 1 ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '') +
                                                    (pagination_st - 2 ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '') +
                                                    (pagination_st + 2 ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '')
                                                }
                                            >
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={() => {
                                                        setPaginationst(
                                                            freeAllbatch[0].length - 1
                                                        )
                                                    }}
                                                >
                                                    {freeAllbatch[0].length}
                                                </a>
                                            </li>
                                            {/*------ end pagination map ------*/}

                                            <li className=''></li>
                                            <li
                                                className={
                                                    'nv page-item itemnv-3' +
                                                    (pagination_st ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' disabled'
                                                        : '')
                                                    + (freeAllbatch[0].length == 1 ? ' d-none' : '')
                                                }
                                            >
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={(e) => {
                                                        setPaginationRight(e)
                                                    }}
                                                    aria-label="Next"
                                                >
                                                    <span aria-hidden="true">›</span>
                                                </a>
                                            </li>
                                            <li
                                                className={
                                                    'nv page-item itemnv-4' +
                                                    (pagination_st ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' disabled'
                                                        : '')
                                                    + (freeAllbatch[0].length == 1 ? ' d-none' : '')
                                                }
                                            >
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={() => {
                                                        setPaginationst(
                                                            freeAllbatch[0].length - 1
                                                        )
                                                    }}
                                                    aria-label="Next"
                                                >
                                                    <span aria-hidden="true">
                                                        &raquo;
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            ) : (
                                ''
                            )}




                        </div>


                        <div className="lg:block hidden ">
                            <div>
                                <div className="px-1  mb-0">
                                    <span className="font-semibold text-sm">Popular in Dehradun</span>
                                </div>
                                <hr className="mt-1" />
                                <Accordion defaultActiveKey={`0`} className="bg-white" >
                                    <Accordion.Item eventKey="0">

                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                            <div className="px-1 text-sm">
                                                Charted Accountant -  Corporate Audit Services
                                                <p className="text-gray-500 text-sm">1 Job</p>
                                            </div>
                                            <hr />
                                            <div className="px-1 text-sm">
                                                Legal Contennt Creator Finology Ventures PrivateLimited
                                                <p className="text-gray-500 text-sm">1 Job</p>
                                            </div>
                                            <hr />
                                            <div className="px-1 text-sm">
                                                Charted Accountant -  Corporate Audit Services
                                                <p className="text-gray-500 text-sm">1 Job</p>
                                            </div>
                                            <hr />
                                            <div className="px-1 text-sm">
                                                Legal Contennt Creator Finology Ventures PrivateLimited
                                                <p className="text-gray-500 text-sm">1 Job</p>
                                            </div>
                                            <hr />
                                            <div className="px-1 text-sm">
                                                Charted Accountant -  Corporate Audit Services
                                                <p className="text-gray-500 text-sm">1 Job</p>
                                            </div>
                                            <hr />
                                            <div className="px-1 text-sm">
                                                Legal Contennt Creator Finology Ventures PrivateLimited
                                                <p className="text-gray-500 text-sm">1 Job</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>






                            </div>
                            <div>
                                <img src={jobBanner} width={`100%`} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu/>
        </>
    )
}

export default Job;