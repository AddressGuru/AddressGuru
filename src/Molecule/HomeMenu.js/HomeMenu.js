import MainMenuItem from "../../Atoms/Cards/MainMenuItem"
import MainMenuData from "../../Asset/Sampledata/HomePageMenu"
const HomeMenu=()=>{
        return(
             <div>
             {/* <h1 className="text-center text-blue-500 font-sans font-bold">Top Category </h1> */}
             <div className="grid grid-cols-8 gap-4 py-4 px-40 ">
             
                     {MainMenuData.map((items,i)=>(
                        <MainMenuItem name={items.name} image={items.image}/>
                     ))}
           
             </div>
             </div>

               
        )
}


export default HomeMenu