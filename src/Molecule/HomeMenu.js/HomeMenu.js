import MainMenuItem from "../../Atoms/Cards/MainMenuItem"
import MainMenuData from "../../Asset/Sampledata/HomePageMenu"
const HomeMenu=()=>{
        return(
             <div>
             {/* <h1 className="text-center text-blue-500 font-sans font-bold">Top Category </h1> */}
             <div className=" grid grid-cols-4 lg:grid lg:grid-cols-8 gap-3 sidePadding sm:py-2 sm:px-4 md:px-8 lg:px-10 xl:px-48   ">
             
                     {MainMenuData.map((items,i)=>(
                        <MainMenuItem name={items.name} image={items.image}/>
                     ))}
           
             </div>
             </div>

               
        )
}


export default HomeMenu