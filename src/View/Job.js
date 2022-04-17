import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";


const Job = () => {
        return (
                <>
                        <div className="grid grid-cols-5 gap-4 bg-gray-100 mt-2 py-10 px-40">
                                <div>
                                <div>
                              <div className="px-1  mb-0">
                              <span className="font-semibold text-sm">Home/ Market Place</span>
                              </div>
                              <hr className="mt-1"/>
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


                                <div className="col-span-3">
                                <div className="bg-white px-4 py-4 mt-2 rounded-xl">
                                <div className="grid grid-cols-4">
<div className="col-span-3">
<h2 className="text-xl text-blue-500">Accountant Supervisore / Executive (Hotel BAckground Onlu)</h2>
<p className="text-sm text-gray-500">Lp villa  by LP Hotel a uni of M/S Motel Place </p>
<div className="grid grid-cols-3">
<span className="mb-2"><b> <i class="fa fa-briefcase" aria-hidden="true"></i> Job Type: </b> Full Time </span>
<span className="col-span-2"><b><i class="fa fa-money" aria-hidden="true"></i> Salary: </b> 10,000 -15,000 / Monthly </span>
</div>
</div>
<div>
<img src="https://www.addressguru.in/images/594022280.crdownload" className="w-100 border-2 rounded-xl"/>     
</div>
                                </div>
                                <div>
                              
                                <button className="btn btn-primary">View Detail</button>
                                <span className="float-right mt-2 text-gray-500 text-sm"> <b> <i class="fa fa-calendar" aria-hidden="true"></i> Posted :</b> 1 Week Ago</span>
                                </div>
                                </div>

                                <div className="bg-white px-4 py-4  mt-2 rounded-xl">
                                <div className="grid grid-cols-4">
<div className="col-span-3">
<h2 className="text-xl text-blue-500">Accountant Supervisore / Executive (Hotel BAckground Onlu)</h2>
<p className="text-sm text-gray-500">Lp villa  by LP Hotel a uni of M/S Motel Place </p>
<div className="grid grid-cols-3">
<span className="mb-2"><b> <i class="fa fa-briefcase" aria-hidden="true"></i> Job Type: </b> Full Time </span>
<span className="col-span-2"><b><i class="fa fa-money" aria-hidden="true"></i> Salary: </b> 10,000 -15,000 / Monthly </span>
</div>
</div>
<div>
<img src="https://www.addressguru.in/images/594022280.crdownload" className="w-100 border-2 rounded-xl"/>     
</div>
                                </div>
                                <div>
                              
                                <button className="btn btn-primary">View Detail</button>
                                <span className="float-right mt-2 text-gray-500 text-sm"> <b> <i class="fa fa-calendar" aria-hidden="true"></i> Posted :</b> 1 Week Ago</span>
                                </div>
                                </div>

                                <div className="bg-white px-4 py-4  mt-2 rounded-xl">
                                <div className="grid grid-cols-4">
<div className="col-span-3">
<h2 className="text-xl text-blue-500">Accountant Supervisore / Executive (Hotel BAckground Onlu)</h2>
<p className="text-sm text-gray-500">Lp villa  by LP Hotel a uni of M/S Motel Place </p>
<div className="grid grid-cols-3">
<span className="mb-2"><b> <i class="fa fa-briefcase" aria-hidden="true"></i> Job Type: </b> Full Time </span>
<span className="col-span-2"><b><i class="fa fa-money" aria-hidden="true"></i> Salary: </b> 10,000 -15,000 / Monthly </span>
</div>
</div>
<div>
<img src="https://www.addressguru.in/images/594022280.crdownload" className="w-100 border-2 rounded-xl"/>     
</div>
                                </div>
                                <div>
                              
                                <button className="btn btn-primary">View Detail</button>
                                <span className="float-right mt-2 text-gray-500 text-sm"> <b> <i class="fa fa-calendar" aria-hidden="true"></i> Posted :</b> 1 Week Ago</span>
                                </div>
                                </div>

                                <div className="bg-white px-4 py-4  mt-2 rounded-xl">
                                <div className="grid grid-cols-4">
<div className="col-span-3">
<h2 className="text-xl text-blue-500">Accountant Supervisore / Executive (Hotel BAckground Onlu)</h2>
<p className="text-sm text-gray-500">Lp villa  by LP Hotel a uni of M/S Motel Place </p>
<div className="grid grid-cols-3">
<span className="mb-2"><b> <i class="fa fa-briefcase" aria-hidden="true"></i> Job Type: </b> Full Time </span>
<span className="col-span-2"><b><i class="fa fa-money" aria-hidden="true"></i> Salary: </b> 10,000 -15,000 / Monthly </span>
</div>
</div>
<div>
<img src="https://www.addressguru.in/images/594022280.crdownload" className="w-100 border-2 rounded-xl"/>     
</div>
                                </div>
                                <div>
                              
                                <button className="btn btn-primary">View Detail</button>
                                <span className="float-right mt-2 text-gray-500 text-sm"> <b> <i class="fa fa-calendar" aria-hidden="true"></i> Posted :</b> 1 Week Ago</span>
                                </div>
                                </div>  

                                <div className="bg-white px-4 py-4  mt-2 rounded-xl">
                                <div className="grid grid-cols-4">
<div className="col-span-3">
<h2 className="text-xl text-blue-500">Accountant Supervisore / Executive (Hotel BAckground Onlu)</h2>
<p className="text-sm text-gray-500">Lp villa  by LP Hotel a uni of M/S Motel Place </p>
<div className="grid grid-cols-3">
<span className="mb-2"><b> <i class="fa fa-briefcase" aria-hidden="true"></i> Job Type: </b> Full Time </span>
<span className="col-span-2"><b><i class="fa fa-money" aria-hidden="true"></i> Salary: </b> 10,000 -15,000 / Monthly </span>
</div>
</div>
<div>
<img src="https://www.addressguru.in/images/594022280.crdownload" className="w-100 border-2 rounded-xl"/>     
</div>
                                </div>
                                <div>
                              
                                <button className="btn btn-primary">View Detail</button>
                                <span className="float-right mt-2 text-gray-500 text-sm"> <b> <i class="fa fa-calendar" aria-hidden="true"></i> Posted :</b> 1 Week Ago</span>
                                </div>
                                </div>

                                <div className="bg-white px-4 py-4  mt-2 rounded-xl">
                                <div className="grid grid-cols-4">
<div className="col-span-3">
<h2 className="text-xl text-blue-500">Accountant Supervisore / Executive (Hotel BAckground Onlu)</h2>
<p className="text-sm text-gray-500">Lp villa  by LP Hotel a uni of M/S Motel Place </p>
<div className="grid grid-cols-3">
<span className="mb-2"><b> <i class="fa fa-briefcase" aria-hidden="true"></i> Job Type: </b> Full Time </span>
<span className="col-span-2"><b><i class="fa fa-money" aria-hidden="true"></i> Salary: </b> 10,000 -15,000 / Monthly </span>
</div>
</div>
<div>
<img src="https://www.addressguru.in/images/594022280.crdownload" className="w-100 border-2 rounded-xl"/>     
</div>
                                </div>
                                <div>
                              
                                <button className="btn btn-primary">View Detail</button>
                                <span className="float-right mt-2 text-gray-500 text-sm"> <b> <i class="fa fa-calendar" aria-hidden="true"></i> Posted :</b> 1 Week Ago</span>
                                </div>
                                </div>

                                <div className="bg-white px-4 py-4  mt-2 rounded-xl">
                                <div className="grid grid-cols-4">
<div className="col-span-3">
<h2 className="text-xl text-blue-500">Accountant Supervisore / Executive (Hotel BAckground Onlu)</h2>
<p className="text-sm text-gray-500">Lp villa  by LP Hotel a uni of M/S Motel Place </p>
<div className="grid grid-cols-3">
<span className="mb-2"><b> <i class="fa fa-briefcase" aria-hidden="true"></i> Job Type: </b> Full Time </span>
<span className="col-span-2"><b><i class="fa fa-money" aria-hidden="true"></i> Salary: </b> 10,000 -15,000 / Monthly </span>
</div>
</div>
<div>
<img src="https://www.addressguru.in/images/594022280.crdownload" className="w-100 border-2 rounded-xl"/>     
</div>
                                </div>
                                <div>
                              
                                <button className="btn btn-primary">View Detail</button>
                                <span className="float-right mt-2 text-gray-500 text-sm"> <b> <i class="fa fa-calendar" aria-hidden="true"></i> Posted :</b> 1 Week Ago</span>
                                </div>
                                </div>

                                <div className="bg-white px-4 py-4  mt-2 rounded-xl">
                                <div className="grid grid-cols-4">
<div className="col-span-3">
<h2 className="text-xl text-blue-500">Accountant Supervisore / Executive (Hotel BAckground Onlu)</h2>
<p className="text-sm text-gray-500">Lp villa  by LP Hotel a uni of M/S Motel Place </p>
<div className="grid grid-cols-3">
<span className="mb-2"><b> <i class="fa fa-briefcase" aria-hidden="true"></i> Job Type: </b> Full Time </span>
<span className="col-span-2"><b><i class="fa fa-money" aria-hidden="true"></i> Salary: </b> 10,000 -15,000 / Monthly </span>
</div>
</div>
<div>
<img src="https://www.addressguru.in/images/594022280.crdownload" className="w-100 border-2 rounded-xl"/>     
</div>
                                </div>
                                <div>
                              
                                <button className="btn btn-primary">View Detail</button>
                                <span className="float-right mt-2 text-gray-500 text-sm"> <b> <i class="fa fa-calendar" aria-hidden="true"></i> Posted :</b> 1 Week Ago</span>
                                </div>
                                </div>


                                </div>


                                <div>
                                <div>
                              <div className="px-1  mb-0">
                              <span className="font-semibold text-sm">Popular in Dehradun</span>
                              </div>
                              <hr className="mt-1"/>
                                        <Accordion defaultActiveKey={`0`} className="bg-white" >
                                                <Accordion.Item eventKey="0">

                                                        <Accordion.Body className="px-2 pt-2 bg-white text-gray-800 ">
                                                                <div className="px-1">
                                                                       Charted Accountant -  Corporate Audit Services
                                                                        <p className="text-gray-500 text-sm">1 Job</p>
                                                                </div>
                                                                <div className="px-1">
                                                                       Legal Contennt Creator Finology Ventures PrivateLimited
                                                                        <p className="text-gray-500 text-sm">1 Job</p>
                                                                </div>
                                                                <div className="px-1">
                                                                       Charted Accountant -  Corporate Audit Services
                                                                        <p className="text-gray-500 text-sm">1 Job</p>
                                                                </div>
                                                                <div className="px-1">
                                                                       Legal Contennt Creator Finology Ventures PrivateLimited
                                                                        <p className="text-gray-500 text-sm">1 Job</p>
                                                                </div>
                                                                <div className="px-1">
                                                                       Charted Accountant -  Corporate Audit Services
                                                                        <p className="text-gray-500 text-sm">1 Job</p>
                                                                </div>
                                                                <div className="px-1">
                                                                       Legal Contennt Creator Finology Ventures PrivateLimited
                                                                        <p className="text-gray-500 text-sm">1 Job</p>
                                                                </div>
                                                        </Accordion.Body>
                                                </Accordion.Item>
                                        </Accordion>

                                     

                                       


                                </div>
                                </div>
                        </div>
                </>
        )
}

export default Job;