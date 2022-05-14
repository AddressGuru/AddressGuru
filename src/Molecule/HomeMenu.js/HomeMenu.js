import MainMenuItem from "../../Atoms/Cards/MainMenuItem"
import MainMenuData from "../../Asset/Sampledata/HomePageMenu"
const HomeMenu=()=>{
        return(
             <div className="container ">
             {/* <h1 className="text-center text-blue-500 font-sans font-bold">Top Category </h1> */}
             <div className=" grid grid-cols-4 lg:grid lg:grid-cols-8 gap-3 sidePadding sm:py-2 pt-4 lg:px-40 xl:px-40  ">
             
                     {MainMenuData.map((items,i)=>(
                        <MainMenuItem name={items.name} image={items.image}/>
                     ))}
           
             </div>
             </div>

               
        )
}


export default HomeMenu