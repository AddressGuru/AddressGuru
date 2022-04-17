import React from "react";
import LandingFirstLeft from "../../Atoms/Layouts/LandingFirstLeft";
import LandingFirstRight from "../../Atoms/Layouts/LandingFirstRight";
import LandingFourthRight from "../../Atoms/Layouts/LandingFourthRight";
import LandingSecondLeft from "../../Atoms/Layouts/LandingSecondLeft";
import LandingSecondRight from "../../Atoms/Layouts/LandingSecondRight";
import LandingThirdRight from "../../Atoms/Layouts/LandingThirdRight";

const LandingPage = () => {
        return (
                <div className="px-40 bg-gray-200 py-20">
                        <div className="grid grid-cols-1 bg-white pt-2 px-4">
                                <h1 className="font-bold">Mi note 4 for sale (in good condition)</h1>
                                <p>Dehradun Uttrakhand,</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                                <div className="col-span-2">
                                        <div>
                                                <LandingFirstLeft />
                                        </div>
                                        <div>
                                                <LandingSecondLeft />
                                        </div>
                                </div>
                                <div>
                                        <div>
                                              <LandingFirstRight/>
                                        </div>
                                        <div>
                                              <LandingSecondRight/>
                                        </div>
                                        <div>
                                              <LandingThirdRight/>
                                        </div>
                                        <div>
                                              <LandingFourthRight/>
                                        </div>

                                </div>
                        </div>

                </div>
        )
}


export default LandingPage