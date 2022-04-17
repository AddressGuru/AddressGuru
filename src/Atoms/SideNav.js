import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import shivam from "../Asset/Image/employee.png"
import Accordion from 'react-bootstrap/Accordion'

const SideNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>

      <i className="fa fa-bars fa-2x" onClick={handleShow}></i>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="grid grid-cols-5 p-2 gap-2">
              <div className="pt-1">
                <img src={shivam} className="border-2 bg-blue-500 rounded-3xl p-2" />
              </div>
              <div className="col-span-4 pt-1">
                <h2 className="mb-0 text-lg text-white uppercase font-semibold">Shivam Negi</h2>
                <p className="text-xs text-white">React Developer</p>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Accordion >
  <Accordion.Item eventKey="0">
    <Accordion.Header>
            <i className="fa fa-bars fa-fw"></i>&nbsp; Menu
         </Accordion.Header>
    <Accordion.Body>
    <ul className="px-0">
            <li className=" mb-1 hover:cursor-pointer hover:text-gray-800 hover:bg-white  border-2 border-white  rounded-lg p-1 shadow-2xl"><i className="fa fa-info fa-fw"></i> About Us</li>
            <li className=" mb-1 hover:cursor-pointer hover:text-gray-800 hover:bg-white  border-2 border-white  rounded-lg p-1 shadow-2xl"><i className="fa fa-phone fa-fw hover:cursor-pointer"></i> Contact Us</li>
            <li className="  mb-1 hover:cursor-pointer hover:text-gray-800 hover:bg-white  border-2 border-white  rounded-lg p-1 shadow-2xl"><i className="fa fa-gavel fa-fw hover:cursor-pointer"></i> Posting Rules</li>
            <li className="  mb-1 hover:cursor-pointer hover:text-gray-800 hover:bg-white  border-2 border-white  rounded-lg p-1 shadow-2xl"><i className="fa fa-credit-card fa-fw hover:cursor-pointer"></i> Our Plans</li>
            <li className="  mb-1 hover:cursor-pointer hover:text-gray-800 hover:bg-white  border-2 border-white  rounded-lg p-1 shadow-2xl"><i className="fa fa-cogs fa-fw hover:cursor-pointer"></i> Infringement Policy</li>
            <li className="  mb-1 hover:cursor-pointer hover:text-gray-800 hover:bg-white  border-2 border-white  rounded-lg p-1 shadow-2xl"><i className="fa fa-gear fa-fw hover:cursor-pointer"></i> Privacy Policy</li>
          </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>



<Accordion >
  <Accordion.Item eventKey="1">
    <Accordion.Header>
    <i className="fa fa-ravelry fa-fw"></i>&nbsp; Social Platform
         </Accordion.Header>
    <Accordion.Body>
    <ul className="px-0">
    <span className="px-3  py-1  mr-1  hover:cursor-pointer hover:text-gray-800 bg-white  border-2 border-white  rounded-sm p-1 shadow-2xl  ">
              <i className="fa fa-facebook text-blue-500 hover:scale-110 " />
            </span>
            <span className=" px-2 py-1 mr-1  hover:cursor-pointer hover:text-gray-800 bg-white  border-2 border-white  rounded-sm p-1 shadow-2xl">
              <i className="fa fa-youtube-play fa-fw text-red-500 hover:scale-110 " />
            </span>
            <span className=" px-2 py-1 mr-1  hover:cursor-pointer hover:text-gray-800 bg-white  border-2 border-white  rounded-sm p-1 shadow-2xl">
              <i className="fa fa-linkedin fa-fw text-blue-600 hover:scale-110 " />
            </span>
            <span className=" px-2 py-1 mr-1  hover:cursor-pointer hover:text-gray-800 bg-white  border-2 border-white  rounded-sm p-1 shadow-2xl">
              <i className="fa fa-twitter fa-fw text-blue-400 hover:scale-110 " />
            </span>
          </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion >
  <Accordion.Item eventKey="2">
    <Accordion.Header>
    <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp; Contact Information
         </Accordion.Header>
    <Accordion.Body>
    <ul className="px-0">
    <li><i className="fa fa-phone fa-fw "></i>  +91-9410102425</li>
            <li><i className="fa fa-envelope fa-fw"></i> contact@addressguru.in</li>
          </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>  


<Accordion >
  <Accordion.Item eventKey="2">
    <Accordion.Header>
    <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp; Become Partner
         </Accordion.Header>
  </Accordion.Item>
</Accordion>  

<Accordion >
  <Accordion.Item eventKey="2">
    <Accordion.Header>
    <i className="fa fa-sign-in fa-fw"></i>&nbsp; Register Now
         </Accordion.Header>
  </Accordion.Item>
</Accordion>  

<div className="grid grid-cols-1 absolute bottom-10 px-4  ">
           <button className=" text-lg bg-red-500 w-full text-white px-20  py-1 rounded-sm"><i className="fa fa-sign-out fa-fw"></i> Logout</button>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>


  )
}


export default SideNav