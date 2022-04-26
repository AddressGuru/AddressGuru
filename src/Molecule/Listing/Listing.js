import { useEffect, useState } from "react"
import MainMenuData from "../../Asset/Sampledata/HomePageMenu"
import ListingCards from "../../Atoms/Cards/listingCards"
import img1 from "../../Asset/Image/recent1.jpg"
import img2 from "../../Asset/Image/recent2.jpg"
import img3 from "../../Asset/Image/recent3.png"
import img4 from "../../Asset/Image/recent4.png"
import img5 from "../../Asset/Image/recent5.jpg"

const Listing=()=>{

//   -------------------------- Hooks- Usestate--------------------------
        const[data, setData]= useState([])
        const [load, setLoad]= useState(false)
//   -------------------------- Hooks- Usestate--------------------------
// --------------------------useeffect------------------------
        function GetData(){
                var requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                      };
                      
                      fetch("https://www.addressguru.in/api/marketplace/recent", requestOptions)
                        .then(response => response.json())
                        .then(result => {
                                setData(result)
                                setLoad(true)
                        })
                        .catch(error => console.log('error', error));
        }
// --------------------------useeffect------------------------

// --------------------------useeffect------------------------
        useEffect(()=>{
                GetData()
        },[])
// --------------------------useeffect------------------------
        return(
             <div className="py-10 lg:px-48 sm:px-8 md:px-10 ">
             <h1 className="text-center text-4xl text-blue-500 font-sans font-bold">Recent Listing </h1>
            {load?  <div className="xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-4 py-4 sidePadding ">   
                     {data.map((items,i)=>(
                              <ListingCards data={items} image1={img1} image2={img2} image3={img3} image4={img4} image5={img5}/>
                     ))}
             </div>:<div></div>}
             </div>

               
        )
}


export default Listing