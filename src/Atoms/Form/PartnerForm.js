
import sign from "../../Asset/Image/googlebutton.png"

const PartnerForm = () => {
        return (
<div>
                        <div className="grid grid-cols-1 bg-white  ">
                                <div className="bg-gray-100 border-2 border-white shadow-2xl py-4 px-4">
                                        <h2>Partner Registration</h2>
                                        <hr />
                                        <div>
                                                <input type={`text`} placeholder={`Full Name`} className="border-2 mb-4 border-gray-300 w-full px-3 py-1" />
                                        </div>
                                        <div>
                                                <input type={`email`} placeholder={`Enter Email`} className="border-2 mb-4  border-gray-300 w-full px-3 py-1" />
                                        </div>
                                        <div>
                                                <input type={`text`} placeholder={`Enter Mobile Number`} className="border-2 mb-4  border-gray-300 w-full px-3 py-1" />
                                        </div>
                                        <div>
                                                <input type={`password`} placeholder={`Create Password`} className="border-2 mb-4  border-gray-300 w-full px-3 py-1" />
                                        </div>
                                        <div>
                                                <input type={`password`} placeholder={`Confirm Password`} className="border-2 mb-4  border-gray-300 w-full px-3 py-1" />
                                        </div>
                                        <div className="justify-center flex">
                                                <button className="btn btn-primary"><i className="fa fa-btn fa-sign-in"></i> Register</button>
                                        </div>
                                </div>
                        </div>
                </div>



        )
}


export default PartnerForm