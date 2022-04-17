import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
        return (
                <div className="bg-white border-t-2">
               
                        <div className="grid grid-cols-3 px-40 py-14">
                                <div className="px-5">
                                        <h1 className=" text-xl font-semibold text-left text-gray-800">Address Guru</h1>
                                        <br/>
                                        <p className="text-sm text-gray-500">Address Guru Is Online Local Business Directory That Provide Information About Your Daily Needs Just One Click Away. We Get Your Business Listed On It And Grow Online By Reaching Everyone Who Search You Online.</p>
                                        <br/>
                                        <span className="px-3 shadow-xl py-1">
                                        <i className="fa fa-facebook text-blue-500 " />
                                        </span>
                                        <span className="shadow-xl px-2 py-1">
                                        <i className="fa fa-youtube-play fa-fw text-red-500 " />
                                        </span>
                                        <span className="shadow-xl px-2 py-1">
                                        <i className="fa fa-linkedin fa-fw text-blue-600 " />
                                        </span>
                                        <span className="shadow-xl px-2 py-1">
                                        <i className="fa fa-twitter fa-fw text-blue-400 " />
                                        </span>
                                       
                                </div>
                                <div className="px-20">
                                        <h3 className="text-xl font-semibold text-gray-800"> <i class="fa fa-info fa-fw" /> Important Links</h3>
                                        <div className="px-1 py-3 text-gray-500 text-sm ">
                                     <Link to='/about' className="no-underline text-gray-600" >   <p> <i className="fa fa-chevron-right fa-fw"/> About Us</p></Link>
                                     <Link className="no-underline text-gray-600" to='/contact'>  <p> <i className="fa fa-chevron-right fa-fw"/>Contact Us</p></Link>
                                     <Link className="no-underline text-gray-600" to='/'>  <p> <i className="fa fa-chevron-right fa-fw"/>Become a partner</p></Link>
                                     <Link className="no-underline text-gray-600" to='/postingrules'>  <p> <i className="fa fa-chevron-right fa-fw"/>Posting Rules</p></Link>
                                     <Link className="no-underline text-gray-600" to='/market'>  <p> <i className="fa fa-chevron-right fa-fw"/>Market Place</p></Link>
                                        </div>
                                </div>
                                <div className="">
                                        <h3 className="text-xl font-semibold text-gray-800"> <i class="fa fa-search fa-fw" /> Quick Links</h3>
                                        <div className="px-2 py-3 text-gray-500 text-sm">
                                        <p> <i className="fa fa-chevron-right fa-fw"/>Post Ad</p>
                                        <Link className="no-underline text-gray-600" to='/pricing'>   <p> <i className="fa fa-chevron-right fa-fw"/>Our Plans</p></Link>
                                        <Link className="no-underline text-gray-600" to='/InfregmentPolicy'>  <p> <i className="fa fa-chevron-right fa-fw"/>Infringement Policy</p></Link>
                                        <Link className="no-underline text-gray-600" to='/privacyPolicy'>  <p> <i className="fa fa-chevron-right fa-fw"/>Privacy Policy</p></Link>
                                        </div>
                                        

                                        

                                       
                                </div>
                               
                        </div>
                        
                        {/* second */}
                        <div className="grid grid-cols-4 px-40 py-10">
                                <div>
                                        <h3 className="text-lg text-gray-800 font-bold">Contact By Phone</h3>
                                        <br/>
                                        <div className="grid grid-cols-10">
                                                <div className="col-span-2 justify-center flex items-center">
                                                        <i className="fa fa-phone text-4xl text-green-500" />
                                                </div>
                                                <div className="col-span-8">
                                                        <a href="#" className="text-blue-500 font-bold">+91-9412918134</a><br />
                                                        <span className="text-sm text-gray-400 ">Booking time: 0800 - 2000 hrs</span>
                                                </div>
                                        </div>
                                </div>
                                <div>
                                        <h3 className="text-lg text-gray-800 font-bold">Give your Feedback</h3>
                                        <br/>
                                        <div className="grid grid-cols-10">
                                                <div className="col-span-2 justify-center flex items-center">
                                                        <i className="fa fa-envelope text-4xl text-red-600" />
                                                </div>
                                                <div className="col-span-8">
                                                        
                                                        <span className="text-sm text-gray-400 ">Help us improve!</span>
                                                </div>
                                        </div>
                                </div>
                                <div>
                                        <h3 className="text-lg text-gray-800 font-bold">Services and Support</h3>
                                        <br/>
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
                                <div>
                                        <h3 className="text-lg text-gray-800 font-bold"> Partners</h3>
                                       
                                </div>
                        </div>


                        {/* third */}
                        <div className="grid grid-cols-4 gap-16 px-40 py-10">
<div className="col-span-3 text-xs text-gray-400">
Disclaimer: All the data and information provided on the site are owned by Address Guru and is protected under Personal Data Protection Act 2012 (PDPA) and Section 107 of the Copyright Act. You are prohibited to copying, modifying or making any differences in the content without any authority of being a member of Address Guru.
<br/><br/>
You are free to use our platform for commercial purposes but any other kind of use is strictly prohibited. We are free to ban any type of content or Ad which is not complying to our policies.
<br/>
<br/>
Before posting anything or becoming a partner of Address Guru, read carefully all the posting policies. 
</div>
<div>

</div>
                        </div>

                        {/* fourth */}
                        <div className="grid grid-cols-3 bg-black text-white px-40 py-4">
                        <div>
<p> 16,303 Live Ads | 3,102+ Agents </p>
                        </div>
                        <div>
                                
                                </div>
                                <div className="float-right">
           <p> © 2022 AddressGuru | by: AdxVenture
</p>                     
                                </div>
                        </div>
                </div>
        )
}


export default Footer