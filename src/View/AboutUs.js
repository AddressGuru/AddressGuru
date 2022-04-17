import React, { useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion'
const AboutUs=()=>{

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
        return(
                <div className="px-80 bg-gray-100 py-10">
<h1 className="text-blue-500 font-bold">About Us</h1>
<hr/>
<p className="text-sm">Address Guru is an online business directory where businesses of every category are listed and promoted. Address guru helps in getting locals as well as big businesses have an online presence and reach among the online audience. This is done through online posting of Ads on our website.
<br/><br/>
Address Guru makes sure you get the right and correct business information on our platform.
<br/><br/>
Maintaining authenticity between the sellers and buyers on our platform.
<br/><br/>
On Address Guru, sellers can advertise their business with banner ads and listing their businesses.
<br/><br/>
Addressguru is a bridge between the buyers looking for sellers and manufacturers of a product and addressguru helps them discover their preferred business easily in their area. For sellers, addressguru is providing a platform to display their business and get themselves in the eyes of the perspective buyers and get new clients and customers on board. This ultimately helps the businesses in their growth and popularity in both online and offline world.
<br/><br/>
With Address Guru, both buyers and sellers can easily interact with each other and do business. Address guru verifies the buyers and aims at listing only the correct information.  </p>


<Accordion defaultActiveKey={`2`} >
  <Accordion.Item eventKey="2">
    <Accordion.Header>
  <h3 className="text-gray-800 text-2xl font-bold"> Address Guru's mission</h3>
         </Accordion.Header>
    <Accordion.Body>
     <p className="text-gray-700 text-sm ">
     We aim at providing a single platform to all the sellers and buyers to discover and connect and conduct business easily and safely.
     </p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>  


<Accordion defaultActiveKey={`2`} >
  <Accordion.Item eventKey="2">
    <Accordion.Header>
  <h3 className="text-gray-800 text-2xl font-bold"> Corporation background</h3>
         </Accordion.Header>
    <Accordion.Body>
    <li className="text-gray-700 text-sm ">
    The company commenced in 2019 offering local business directories and then reaching out at country level and then to international level.
     </li>
     <li className="text-gray-700 text-sm ">
     The official addressguru website was launched in 2018. 
     </li>
     <li className="text-gray-700 text-sm ">
     Address Guru Search services provide a bridge to the businesses and its prospective buyers to discover and connect. It provides many opportunities to the businesses to market their business effectively.
     </li>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>  




<Accordion defaultActiveKey={`2`} >
  <Accordion.Item eventKey="2">
    <Accordion.Header>
  <h3 className="text-gray-800 text-2xl font-bold"> Key Highlights of Address Guru</h3>
         </Accordion.Header>
    <Accordion.Body>
    <li className="text-gray-700 text-sm ">
    International presence - Address guru has an international presence from India to .
     </li>
     <li className="text-gray-700 text-sm ">
     Large community of users - Address Guru is having a very large user base of sellers.
     </li>
     <li className="text-gray-700 text-sm ">
     Local business reach - With specific reach for the local business we help the users to search for their relevant products easily in their local area.
     </li>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>  




<Accordion defaultActiveKey={`2`} >
  <Accordion.Item eventKey="2">
    <Accordion.Header>
  <h3 className="text-gray-800 text-2xl font-bold  "> How to report listing infringement.</h3>
         </Accordion.Header>
    <Accordion.Body>
   <p className="text-gray-800">You infringement email should include these things : </p>
<li className="text-gray-800">Identification of the infringed property </li>
<li className="text-gray-800">Description of the information or material that has been infringed  </li>
<li className="text-gray-800">Your address, contact number and email </li>
<li className="text-gray-800">A written statement confirming that the information provided by you is correct and you hold the utmost right to the property and act as the rightful owner of the property. </li>
<li className="text-gray-800">Brand name (in case of Trademark infringement) </li>
<li className="text-gray-800">Details of the property infringed </li>
<li className="text-gray-800">Documents for legal proceedings against the party infringing the property. </li>
    </Accordion.Body>
  </Accordion.Item>
</Accordion> 
                </div>
        )
}


export default AboutUs