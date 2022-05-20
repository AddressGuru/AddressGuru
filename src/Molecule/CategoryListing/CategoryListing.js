import React, { useState } from "react"
import CategoiesListCard from "../../Atoms/Cards/CategoriesListCard"
import dsom from "../../Asset/Image/dsom.jpg"
import Accordion from 'react-bootstrap/Accordion'
import ScrollAnimation from 'react-animate-on-scroll'
import { Modal } from "react-bootstrap"


const CategoryListing = () => {
        const Count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1,]
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

       



        return (
                <>
                        <div className="grid grid-cols-3 gap-2 lg:hidden pb-4">
                                <div>
                                        <button className="btn bg-blue-200 text-sm w-full" onClick={()=>setJOb(true)}>
                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800 text-xs"> Job Type</span>
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
                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800 text-xs"> Top Result</span>
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
                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800 text-xs"> Locality</span>
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

                        <div className="grid grid-cols-4 gap-4 lg:px-40">
                                <div className="lg:col-span-3 col-span-4">


                                        {freeAllbatch[0].length > 0 ? (
                                                freeAllbatch[0][pagination_st].map((item, index) => (
                                                        <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6 * index} animateOnce={true} className='col-12 mb-2'>
                                                                <CategoiesListCard />

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
                                <div className="hidden lg:block">
                                        <div>
                                                <button className="btn btn-primary w-full mb-2">
                                                        Search Filter <i className="fa fa-filter"></i>
                                                </button>

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


                                                <Accordion defaultActiveKey={`0`} className=" bg-gray-300 border-1 border-gray-600" >
                                                        <Accordion.Item eventKey="0">
                                                                <Accordion.Header>
                                                                        <i class="fa fa-list-alt text-gray-800" aria-hidden="true"></i>&nbsp;&nbsp;<span className="text-gray-800"> Other cities</span>
                                                                </Accordion.Header>
                                                                <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
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

                </>

        )
}


export default CategoryListing