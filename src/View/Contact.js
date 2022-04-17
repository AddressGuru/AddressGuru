import Form from "../Atoms/Form/Form"
import contact from "../Asset/Image/contact.png"
import React, { useEffect } from "react";


const Contact = () => {
        useEffect(()=>{
                window.scrollTo(0, 0);
              },[])
        return (
                <div>
                <div>
                  <img src={contact}/>      
                </div>
                <div className="grid grid-cols-2 gap-4 px-40">
<div className=" py-20">

                                    
                                        <div className="grid grid-cols-3">
                                        <div className="grid grid-cols-10">
                                                <div className="col-span-2 justify-center flex items-center">
                                                        <i className="fa fa-phone text-4xl text-green-500" />
                                                </div>
                                                <div className="col-span-8">
                                                        <a href="#" className="text-blue-500 font-bold">+91-9412918134</a><br />
                                                        <span className="text-sm text-gray-400 ">Booking time: 0800 - 2000 hrs</span>
                                                </div>
                                        </div>

                                        <div className="grid grid-cols-10">
                                                <div className="col-span-2 justify-center flex items-center">
                                                        <i className="fa fa-envelope text-4xl text-red-600" />
                                                </div>
                                                <div className="col-span-8">
                                                        
                                                        <span className="text-sm text-gray-400 ">Help us improve!</span>
                                                </div>
                                        </div>

                                        <div className="grid grid-cols-10">
                                                <div className="col-span-2 justify-center flex items-center">
                                                        <i className="fa fa-headphones text-blue-500 text-4xl" />
                                                </div>
                                                <div className="col-span-8">
                                                        <a href="#" className="text-blue-500 font-bold">Support Centre</a><br />
                                                        <span className="text-sm text-gray-400 ">29, Tagore Villa, Dehradun UK</span>
                                                </div>
                                        </div>

                                        </div>
                                       
                                        

                                        
</div>
<div className="px-10">
<Form/>   
        </div>
                </div>
                  
                </div>


        )
}


export default Contact