import React, { useContext, useState } from "react";
import logo from "../../Asset/Image/logo.png"
import marketplace from "../../Asset/Image/marketplace.svg"
import job from "../../Asset/Image/job.svg"
import SideNav from "../SideNav";
import { Context } from "../../Api/CityList";
import { Dropdown } from "react-bootstrap";
import DropdownSelect from "../Dropdown/Dropdown";
const Header = () => {
  // --------------------ContextAPI---------------------
  const { value1, value2 } = useContext(Context)
  const [data, setData] = value1;
  const [load, setLoad] = value2;
  // --------------------ContextAPI---------------------

  //     List OF CITY
  const [city, setCity] = useState("Dehradun")

  // function
  function citySelect(e) {
    setCity(e)
  }

  return (
    <div className="bg-gray-100 shadow-xl ">
<div className="container   z-50 sticky top-0">
      <div className="grid grid-cols-3 lg:grid lg:grid-cols-12 py-1 px-16  ">
        <div className=" lg:pt-3 px-4">
          <SideNav />
        </div>
        <div className="lg:col-span-2  pt-2">
          <img src={logo} className="w-full relative right-8 " width={`100%`} height={`100%`}/>
        </div>
        <div className=" pt-2 lg:hidden block">
          <Dropdown className="float-right justify-right">
            <Dropdown.Toggle id="dropdown-basic" >
              <i className="fa fa-map-marker text-xs fa-fw"></i> {city}
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <div className="bg-white sticky pt-2 -top-5">
            <input type={`text`} placeholder="Searc Your City " className=" bg-white px-3 py-1  mb-2 w-full  rounded-3xl  "/>
            </div>
           
              {data.sort().map((items, i) => (
                <Dropdown.Item onClick={(e) => citySelect(items)} href="#">  {items}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-span-6 lg:py-3 lg:pt-5  ">
          <div className="border-2 h-auto grid grid-cols-8 bg-white border-gray-400 ">
            <div className="col-span-3">
            <DropdownSelect/>
            </div>
            <div className="col-span-4">
           <div className="h-full">
           <input type={`text`} placeholder={`Search `} className=" w-full h-full lg:border-l-2 pl-2 top-0 bg-white relative focus:border-0 searchitem" />
           </div>
            </div>
            <div className="col-span-1">
            <button className=" w-4/5 bg-blue-600 h-full float-right  relative  lg:relative lg:top-0  "> <i class="fa fa-search text-sm xl:text-lg text-white  "></i></button> 
            </div>   
          </div>
        </div>

        <div className="p-3 col-span-3 hidden lg:block ">
          <button className="float-right  ml-2 shadow-xl bg-blue-500 text-white xl:px-2 pt-2 pb-2 h-full lg:text-lg lg:px-2 rounded-sm login">Login  <i class="fa fa-sign-in" aria-hidden="true"></i>
          </button>
          <button className="float-right  shadow-xl bg-yellow-400 text-gray-700 xl:px-4 pt-2 pb-2 h-full lg:text-lg lg:px-4 rounded-sm PostFree">Post Free Ad <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
    
  )
}


export default Header