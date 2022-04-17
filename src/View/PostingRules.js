import React,{useEffect} from "react";
import Accordion from 'react-bootstrap/Accordion'

const PostingRules=()=>{
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

        return(
                <div className="px-80 bg-gray-100 py-10 ">
                <div className="mb-20">
<h1 className="text-blue-500 font-bold">Posting Rules <span>(What not allowed)</span> </h1>
<hr/>

<li>   Listing items that are illegal to buy, own, import or sell in the country of your residence.</li>
    <li>  Listing your business not being located in India</li>
    <li>  Listing Ad in other language than English</li>
    <li> Listing incomplete Ad</li>
    <li>  Listing Ad which is discriminatory as per caste/religion/nationality.</li>
    <li> Listing multiple Ads with different accounts/mail Id</li>
    <li> Listing any type of Adult content/Ad</li>
    <li> Listing Ad regarding any political view that may offend</li>
    <li> Listing Ad containing any kind of misleading information.</li>
    <li> Listing Ad with hateful information or remarks</li>


</div>

<div>
<h1 className="text-blue-500 font-bold">Help & Support</h1>
<hr/>
<h3 className="text-semibold">F&Q</h3>

<Accordion defaultActiveKey={`2`} >
  <Accordion.Item eventKey="2">
    <Accordion.Header>
  <h3 className="text-gray-800 text-lg ">  1. How do I post an Ad?</h3>
         </Accordion.Header>
    <Accordion.Body>
    <p className="text-gray-700 text-sm ">
    Ans. Click on the {<button className="btn btn-success">Post Ad</button>} button
    <br/>
        Select the type of category <br/>
        Enter the details like Title, Description and all other details <br/>
        Enter your email address, phone number <br/>
        click on Post Ad option <br/>
        If you want to run paid ads to get good ranking and posting, you can refer our paid plans and choose from there <br/>
        Check your email for confirmation of Ad approval <br/>
   </p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>  
<Accordion defaultActiveKey={`2`} >
  <Accordion.Item eventKey="2">
    <Accordion.Header>
  <h3 className="text-gray-800 text-lg "> 2. What are the safety rules for me?</h3>
         </Accordion.Header>
    <Accordion.Body>
    <p className="text-gray-700 text-sm ">
    Ans. Tips for staying safe <br/>
    <br/>  1. Before buying or selling, make sure you meet the person face to face and do enough inspection regarding the seller or buyer
    <br/> 2. Never send the product before getting the money
    <br/> 3. Never send money online
    <br/>  4. Address Guru Singapore does not offer any Customer/seller protection
    <br/>  5. Take full care of delicate products
    <br/>  6. Never provide personal or banking information to anybody
    <br/> 7. Be aware of common fraud or scam activities
    <br/> 8. Report us if you face any kind of fraudulent activity
   </p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion> 
</div>
                </div>
        )
}


export default PostingRules