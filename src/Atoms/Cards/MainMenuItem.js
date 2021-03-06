import { Link } from "react-router-dom";
import market from "../../Asset/Image/taxi.png";

const MainMenuItem=(props)=>{
     let red= "#ffffff"
     console.log('ff',props)
        return(
             <>



{props.image?<Link to="/job"  className="no-underline text-gray-800">
     <div className=" lg:p-2 p-1  rounded-lg custom-menu-css">
<div className="flex justify-center">

<img src={props.image} className="lg:w-1/2 w-2/5" width={`100%`} height={`100%`} />
</div>
<h6 className="text-center MainMenuTitle2    font-semibold mt-2 mb-0">{props.name}</h6>   
<p className="text-center MainMenuCount mb-0">(4300)</p>
</div>
</Link>:
<Link to="/landing" className="no-underline text-gray-800">
<div className=" rounded-xl  custom-menu-css-v2 pt-3 pb-1 px-1 ">
<div className="flex justify-center">

<i className={`fa fa-${props.icon} fa-3x icon-category ` } style={{color:`${props.color}`}} />
</div>
<h3 className="text-center text-xs MainMenuTitle lg:text-sm lg:font-semibold xs:font-normal mt-2">{props.name}</h3>
</div>
</Link>
}
             </>   
        )
}


export default MainMenuItem
