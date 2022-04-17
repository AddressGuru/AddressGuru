import React, { useContext, useState } from "react";
import logo from "../../Asset/Image/logo.png"
import marketplace from "../../Asset/Image/marketplace.svg"
import job from "../../Asset/Image/job.svg"
import SideNav from "../SideNav";
import { Context } from "../../Api/CityList";
import { Dropdown } from "react-bootstrap";
const Header=()=>{
                // --------------------ContextAPI---------------------
                const { value1, value2 } = useContext(Context)
                const [data, setData] = value1;
                const [load, setLoad] = value2;
                // --------------------ContextAPI---------------------

        //     List OF CITY
const [city, setCity]= useState("Dehradun")

// function
function citySelect(e){
setCity(e)
}

        return(
                <div className="sticky top-0 bg-white z-50" >
<div className="grid grid-cols-12 gap-4 px-10 pt-3  ">
<div className="pt-3">
<SideNav/>
</div>
<div className="col-span-2 px-2">
<img src={logo}/>
</div>
<div className="col-span-5 p-3">
<div className="border-2 shadow-2xl flex justify-center rounded-3xl  pr-1">
<Dropdown>
  <Dropdown.Toggle id="dropdown-basic">
 <i className="fa fa-map-marker fa-fw"></i> {city}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {data.sort().map((items,i)=>(
        <Dropdown.Item  onClick={(e)=>citySelect(items)} href="#"> <i className="fa fa-map-marker fa-fw"></i> {items}</Dropdown.Item>
    ))}
  </Dropdown.Menu>
</Dropdown>
  
        <input type={`text`} placeholder={`Search `} className=" w-3/5 border-l-2 pl-2 top-0  relative focus:border-0" />
        <button className=" w-1/5  "> <i class="fa fa-search float-right bg-purple-800 p-2 rounded-2xl text-white "></i></button>
</div>
</div>
<div className="col-span-1">

</div>
<div className="p-3 col-span-3  ">
<button className="float-right font-semibold ml-2 shadow-xl bg-blue-500 text-white px-8 pt-2 pb-3 rounded-3xl">Login  <i class="fa fa-sign-in" aria-hidden="true"></i>
</button>
<button className="float-right font-semibold shadow-xl bg-yellow-400 text-gray-700 px-8 pt-2 pb-3 rounded-3xl">Post Free Ad <i class="fa fa-plus" aria-hidden="true"></i>
</button>
</div>
</div>
                </div>
        )
}


export default Header