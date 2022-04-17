import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
const Pricing = () => {
        useEffect(() => {
                window.scrollTo(0, 0);
        }, [])

        return (
                <div className="px-40 py-10">
                        <div className="py-10 px-20 Pricing-table ">

                                <Table striped bordered hover>
                                        <tr className="text-3xl Pricing-Heading ">
                                                <th className="p-4">₹ Pricing Table </th>
                                                <th className="pt-4"><p className="text-2xl font-semibold"><i className="fa fa-flash"></i> Basic </p>
                                                        <p className="text-2xl font-normal text-blue-500">₹1299.00 /yearly</p></th>
                                                <th className="pt-4">
                                                        <p className="text-2xl font-semibold"><i className="fa fa-diamond"></i> Professional </p>
                                                        <p className="text-2xl font-normal text-blue-500">₹4999.00 /lifetime</p></th>
                                        </tr>
                                        <tbody>
                                                <tr>
                                                        <td  >Google My Business</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                </tr>
                                                <tr>
                                                        <td >SMS Leads</td>
                                                        <td>3000</td>
                                                        <td>Unlimited</td>

                                                </tr>
                                                <tr>
                                                        <td>Video</td>
                                                        <td>1 minute</td>
                                                        <td>5 minute</td>
                                                </tr>

                                                <tr>
                                                        <td>Promotional Banner</td>
                                                        <td>2 to 4</td>
                                                        <td>4 to 8</td>
                                                </tr>

                                                <tr>
                                                        <td>Email Leads</td>
                                                        <td>5000</td>
                                                        <td>Unlimited</td>
                                                </tr>

                                                <tr>
                                                        <td>Fb Page Optimization</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                </tr>

                                                <tr>
                                                        <td>Fb Page Reach</td>
                                                        <td>2000</td>
                                                        <td>5000</td>
                                                </tr>

                                                <tr>
                                                        <td>Fb Page Promotion</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                </tr>
                                                <tr>
                                                        <td>Photoshoot</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                </tr>

                                                <tr>
                                                        <td>Website Audit</td>
                                                        <td>Only home page</td>
                                                        <td>Complete</td>
                                                </tr>

                                                <tr>
                                                        <td>Premium Listing</td>
                                                        <td>1 Year top category</td>
                                                        <td>5 Year top category</td>
                                                </tr>

                                        </tbody>
                                </Table>

                        </div>
                </div>
        )
}


export default Pricing