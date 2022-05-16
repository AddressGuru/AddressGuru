import React from "react";
import LandingClaim from "../../Atoms/Layouts/LandingClaim";
import LandingFirstLeft from "../../Atoms/Layouts/LandingFirstLeft";
import LandingFirstRight from "../../Atoms/Layouts/LandingFirstRight";
import LandingFourthRight from "../../Atoms/Layouts/LandingFourthRight";
import LandingSecondLeft from "../../Atoms/Layouts/LandingSecondLeft";
import LandingSecondRight from "../../Atoms/Layouts/LandingSecondRight";
import LandingThirdRight from "../../Atoms/Layouts/LandingThirdRight";
import TumbnailSlider from "../../Atoms/Layouts/LandingTumbnailSlider"
import LandingVideo from "../../Atoms/Layouts/LandingVideo";

const LandingPage = () => {
        return (
                <div className="bg-gray-100">
                        <div className="container ">
                                <div className="px-40 py-20">
                                        <div className="grid grid-cols-1 bg-white pt-2 px-4">
                                                <h1 className="font-bold text-3xl">Mi note 4 for sale (in good condition)</h1>
                                                <p>Dehradun Uttrakhand,</p>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 mt-2">
                                                <div className="col-span-2">
                                                       
                                                        <div className="">
                                                        <TumbnailSlider />
                                                                <LandingFirstLeft />
                                                        </div>
                                                        <div>
                                                                <LandingSecondLeft />
                                                        </div>
                                                </div>
                                                <div>
                                                        <div>
                                                                <LandingFirstRight />
                                                        </div>
                                                        <div>
                                                                <LandingSecondRight />
                                                        </div>
                                                        <div>
                                                                <LandingVideo />
                                                        </div>
                                                        <div>
                                                                <LandingThirdRight />

                                                        </div>
                                                        <div>
                                                                <LandingClaim />
                                                        </div>
                                                        <div>

                                                                <LandingFourthRight />
                                                        </div>


                                                </div>
                                        </div>

                                </div>
                        </div>
                </div>
        )
}


export default LandingPage