import MainMenuItem from "../../Atoms/Cards/MainMenuItem"
import CategoryData from "../../Asset/Sampledata/CategoryData"
import banner from "../../Asset/Image/front-banner.jpeg"
import { Context } from "../../Api/Categories"
import { useContext } from "react"
import advertise from "../../Asset/Image/advertise1.png"





const Category=()=>{
        const {value1, value2}= useContext(Context);
        const [data, setData] = value1;
        const [load, setLoad] = value2;


       
        return(
             <div className="container">
             {/* <h1 className="text-center text-blue-500 font-sans font-bold">Search Just One Click <i class="fa fa-hand-o-right" aria-hidden="true"></i> Away</h1> */}
            <div className="lg:grid lg:grid-cols-8 sm:grid sm:grid-cols-6  gap-4 lg:px-20 xl:px-16 ">
<div className="col-span-6">
{load?<div className="grid grid-cols-4 lg:grid lg:grid-cols-6 px-2 gap-2 pt-2  ">
             
             {data.map((items,i)=>(
                <MainMenuItem name={items.name} color={items.colors} icon={items.icon} id={items.id} product={items.product}/>
             ))}
</div>:<div>
</div>}
</div>
<div className="lg:col-span-2 col-span-6 md:col-span-6 lg:pt-2   ">
<div className="p-1 border-2 border-gray">
<img src={advertise} className="w-full"/>
</div>
<div className="p-1 border-2 border-gray">
<img src={banner} className="w-full"/>
</div>
</div>
            </div>
             </div>

               
        )
}


export default Category