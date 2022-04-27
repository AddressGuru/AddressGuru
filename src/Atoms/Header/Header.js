import React, { useContext, useState } from "react";
import logo from "../../Asset/Image/logo.png"
import marketplace from "../../Asset/Image/marketplace.svg"
import job from "../../Asset/Image/job.svg"
import SideNav from "../SideNav";
import { Context } from "../../Api/CityList";
import { Dropdown } from "react-bootstrap";
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
    <div className="sticky top-0">
      <div className=" bg-gray-100 z-50" >
      <div className="grid grid-cols-3 lg:grid lg:grid-cols-12 py-3 px-2  ">
        <div className=" lg:pt-3 px-4">
          <SideNav />
        </div>
        <div className="lg:col-span-2 ">
          <img src={logo} className="w-full lg:w-4/5 lg:mt-1 " />
        </div>
        <div className=" pt-2 lg:hidden block">
          <Dropdown className="float-right justify-right">
            <Dropdown.Toggle id="dropdown-basic" >
              <i className="fa fa-map-marker text-xs fa-fw"></i> {city}
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <div className="bg-white sticky pt-2 -top-5">
            <input type={`text`} placeholder="Searc Your City " className=" bg-white px-3 py-1  mb-2 w-full border-2 rounded-3xl "/>
            </div>
           
              {data.sort().map((items, i) => (
                <Dropdown.Item onClick={(e) => citySelect(items)} href="#"> <i className="fa fa-map-marker fa-fw"></i> {items}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-span-5 mt-3 px-2 ">
          <div className="border-2 bg-white border-gray-400 p-1 lg:flex lg:justify-center pr-1">
            <Dropdown className="hidden lg:block">
              <Dropdown.Toggle id="dropdown-basic">
                <i className="fa fa-map-marker fa-fw text-xs"></i> {city}
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <input type={`text`} placeholder="Search Your City " className="mx-2 my-2 px-2 border-2  "/>
                {data.sort().map((items, i) => (
                  <Dropdown.Item onClick={(e) => citySelect(items)} href="#"> <i className="fa fa-map-marker fa-fw"></i> {items}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <input type={`text`} placeholder={`Search `} className=" w-4/5 lg:w-3/5 lg:border-l-2 pl-2 top-0 bg-white relative focus:border-0" />
            <button className=" lg:w-1/5 float-right -top-1 relative p-1 lg:relative lg:top-0  "> <i class="fa fa-search text-xs xl:text-sm float-right bg-purple-800 px-2 py-1 rounded-2xl text-white "></i></button>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">

        </div>
        <div className="p-3 col-span-3 hidden lg:block ">
          <button className="float-right font-semibold ml-2 shadow-xl bg-blue-500 text-white xl:px-8 pt-2 pb-2 rounded-3xl lg:text-sm lg:px-4 ">Login  <i class="fa fa-sign-in" aria-hidden="true"></i>
          </button>
          <button className="float-right font-semibold shadow-xl bg-yellow-400 text-gray-700 xl:px-8 pt-2 pb-2 rounded-3xl lg:text-sm lg:px-4">Post Free Ad <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Header