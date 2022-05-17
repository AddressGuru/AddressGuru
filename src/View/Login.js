import Form from "../Atoms/Form/Form"
import contact from "../Asset/Image/contact.png"
import LoginForm from "../Atoms/Form/LoginForm"
import React, { useEffect } from "react";
import ListingBenefit from "../Atoms/ListingBenifits";


const Login = () => {
        useEffect(() => {
                window.scrollTo(0, 0);
        }, [])

        return (
                <div className="container">

                        <div className="grid grid-cols-6 gap-4 lg:px-40">
                                <div className=" lg:py-20 pt-4 lg:col-span-3 col-span-6 px-4 lg:px-0">
                                        <ListingBenefit />
                                </div>
                                <div className="lg:px-10 lg:col-span-3 col-span-6">
                                        <LoginForm />   
                                </div>
                        </div>

                </div>


        )
}


export default Login