
import sign from "../../Asset/Image/googlebutton.png"

const LoginForm = () => {
        return (
                <div>
                        <div className="grid grid-cols-1 bg-white px-4 py-4 ">
                                <div className="bg-gray-200 border-2 border-white shadow-2xl py-12 px-4">
                                        <h2 className="text-blue-500 font-bold"> Login</h2>
                                        <hr />
                                       
                                        <div className="py-2">
                                        <div>
                                                <input type={`email`} placeholder={`Email`} className="border-2 mb-3 rounded-lg  border-gray-300 w-full px-3 py-1" />
                                        </div>
                                     
                                        <div>
                                                <input type={`password`} placeholder={`Password`} className="border-2 mb-4 rounded-lg border-gray-300 w-full px-3 py-1" />
                                        </div>
                                        <div className="">
                                                <button className="btn btn-primary"> <i className="fa fa-btn fa-key"></i> Login</button>
                                                <a link="#" className="float-right no-underline">Forget Your Password</a>
                                        </div>
                                      <div className="justify-center flex mt-4">
                                                <img src={sign} className="w-3/5"/>
                                                </div>
                                                <div>
                                                        <p className="text-center">Don't have account?</p>
                                                       
                                                </div>
                                                <div className="flex justify-center">
                                                <button className="btn btn-success "> <i className="fa fa-sign-in"></i> Create Account</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>


        )
}


export default LoginForm