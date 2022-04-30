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

                        <div className="grid grid-cols-6 gap-4 px-20">
                                <div className=" py-20 col-span-3">
                                        <ListingBenefit />
                                </div>
                                <div className="px-10 col-span-3">
                                        <LoginForm />   <i className="fa fa-check-square-o"></i>
                                </div>
                        </div>

                </div>


        )
}


export default Login