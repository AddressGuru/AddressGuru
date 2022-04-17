import { useEffect, useState } from "react"
import MainMenuData from "../../Asset/Sampledata/HomePageMenu"
import ListingCards from "../../Atoms/Cards/listingCards"


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
             <div className="py-10 px-40">
             <h1 className="text-center text-4xl text-blue-500 font-sans font-bold">Recent Listing </h1>
            {load?  <div className="grid grid-cols-4 gap-4 py-4  ">   
                     {data.map((items,i)=>(
                              <ListingCards data={items}/>
                     ))}
             </div>:<div></div>}
             </div>

               
        )
}


export default Listing