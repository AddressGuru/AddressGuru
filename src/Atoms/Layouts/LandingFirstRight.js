import { Modal } from "react-bootstrap";
import React,{ useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingFirstRight = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="grid grid-cols-1 ">
        <div className="bg-white px-4 py-4 border-gray-200 border-2">
          <p className="text-blue-500 font-semibold"><i className="fa fa-phone fa-fw yoi"></i> +91-9915587720</p>
          <p className="text-blue-500 font-semibold"><i className="fa fa-globe fa-fw yoi"></i> Visit Website</p>
          <p ><i className="fa fa-tags fa-fw yoi"></i>  Astrologer </p>

         
          {/* <button className="bg-yellow-500 w-2/5 rounded-lg"><i className="fa fa-eye"></i> Views</button> */}
          <div className="rounded-lg "><button className="bg-yellow-500 px-4 pb-1 rounded-l-lg shadow-lg"> <i className="fa fa-eye"></i> Views</button><button className="bg-gray-500 pb-1 text-white px-2 rounded-r-lg shadow-lg">245540</button></div>
          <div className="mt-4">
            <p className=" font-bold">Share On:</p>
          </div>

          <ul className="px-0">
            <span className="px-3  py-1  mr-1  hover:cursor-pointer hover:text-gray-800 bg-blue-500  border-2 border-white  rounded-sm p-1 shadow-2xl  ">
              <i className="fa fa-facebook  text-white hover:scale-110 " />
            </span>
            <span className=" px-2 py-1 mr-1  hover:cursor-pointer hover:text-gray-800 bg-red-500  border-2 border-white  rounded-sm p-1 shadow-2xl">
              <i className="fa fa-youtube-play fa-fw text-white hover:scale-110 " />
            </span>
            <span className=" px-2 py-1 mr-1  hover:cursor-pointer hover:text-gray-800 bg-blue-600  border-2 border-white  rounded-sm p-1 shadow-2xl">
              <i className="fa fa-linkedin fa-fw text-white hover:scale-110 " />
            </span>
            <span className=" px-2 py-1 mr-1  hover:cursor-pointer hover:text-gray-800 bg-blue-400  border-2 border-white  rounded-sm p-1 shadow-2xl">
              <i className="fa fa-twitter fa-fw text-white hover:scale-110 " />
            </span>
          </ul>
        </div>
      </div>
      <div className="px-2">
        <button className="float-left text-xs text-red-500 font-bold" onClick={handleShow}><i className="fa fa-exclamation-circle"></i> Report</button>
       <span className="text-xs float-right "><b>ADD  ID-</b> 12345762127854 </span>
                                                             
      </div>


      <div className="grid grid-cols-1 bg-white  mt-12 ">
      <div className="border-2   ">
          <div className="px-4 py-2 bg-gray-200 ">

            <h5>
              <span className="text-green-500 font-bold">5 </span>
              <i className="fa fa-star text-yellow-500"></i>
              <i className="fa fa-star text-yellow-500"></i>
              <i className="fa fa-star text-yellow-500"></i>
              <i className="fa fa-star text-yellow-500"></i>
              <i className="fa fa-star text-yellow-500"></i>
              <span className="text-sm font-bold"> (1 Reviews)</span>
            </h5>

          </div>
          <div className="px-4 h-40 overflow-scroll">
            <marquee direction="up" loop="true" onmouseover="this.stop()">
              <h4 className="text-lg font-bold mb-0">Shalu</h4>
              <div class="geek2">
                <i className="fa fa-star text-yellow-500"></i>
                <i className="fa fa-star text-yellow-500"></i>
                <i className="fa fa-star text-yellow-500"></i>
                <i className="fa fa-star text-yellow-500"></i>
                <i className="fa fa-star text-yellow-500"></i>
                <span className="text-sm font-semibold"> 9 months ago</span>
                <p className="text-sm">A well-known astrologer with over 25 years of experience.</p>
                <hr />
              </div>
            </marquee>

          </div>
        </div>
      </div>



{/* -----------------------------Modal---------------------------------  */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-blue-500 text-white" closeButton>
          <Modal.Title className=" font-bold">
            <div className="px-4 text-lg">
            Report: Sahastra Architects - Dehradun
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
       <div className="px-4 text-sm ">
       <div className="py-1">
       <input type="radio" id="html" name="fav_language" value="Illegal/Fraudulent"/>
        <label for="html"> &nbsp;&nbsp;  Illegal/Fraudulent</label><br/>
       </div>
       <div className="py-1">
        <input type="radio" id="html" name="fav_language" value="HTSpam AdML"/>
        <label for="html">&nbsp;&nbsp; Spam Ad</label><br/>
</div>
<div className="py-1">
        <input type="radio" id="html" name="fav_language" value="Duplicate Ad"/>
        <label for="html"> &nbsp;&nbsp; Duplicate Ad</label><br/>
</div>
<div className="py-1">
        <input type="radio" id="html" name="fav_language" value="Ad is in the wrong category"/>
        <label for="html"> &nbsp;&nbsp; Ad is in the wrong category</label><br/>
</div>
<div className="py-1">
        <input type="radio" id="html" name="fav_language" value="Against Posting Rules"/>
        <label for="html"> &nbsp;&nbsp; Against Posting Rules</label><br/>
</div>
<div className="py-1">
        <input type="radio" id="html" name="fav_language" value="Adult Content"/>
        <label for="html">&nbsp;&nbsp; Adult Content</label><br/>
</div>
<div className="py-1">
        <input type="radio" id="html" name="fav_language" value="Other"/>
        <label for="html">&nbsp;&nbsp; Other</label><br/>
</div>
<br/>
<input type={`text`} placeholder={`Enter your email address`} className="border-2 w-full px-2 py-1 text-lg"/>

<div className="flex justify-center">
  <button className="btn btn-primary mt-4">Submit</button>
</div>

       </div>
        </Modal.Body>
        
      </Modal>
{/* -----------------------------Modal---------------------------------  */}     
    </div>


  )
}


export default LandingFirstRight