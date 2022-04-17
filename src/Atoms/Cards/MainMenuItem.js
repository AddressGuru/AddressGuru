import { Link } from "react-router-dom";
import market from "../../Asset/Image/taxi.png";

const MainMenuItem=(props)=>{
     let red= "#ffffff"
     console.log('ff',props)
        return(
             <>



{props.image?<Link to="/Landing"  className="no-underline text-gray-800">
     <div className=" p-2  rounded-xl custom-menu-css">
<div className="flex justify-center">

<img src={props.image} className="w-1/2"/>
</div>
<h3 className="text-center text-lg font-semibold mt-2 mb-0">{props.name}</h3>   
<p className="text-center text-xs mb-0">(4300)</p>
</div>
</Link>:
<Link to="/landing" className="no-underline text-gray-800">
<div className=" rounded-xl  custom-menu-css-v2 pt-3 ">
<div className="flex justify-center">

<i className={`fa fa-${props.icon} fa-3x ` } style={{color:`${props.color}`}} />
</div>
<h3 className="text-center text-sm font-semibold mt-2">{props.name}</h3>
</div>
</Link>
}
             </>   
        )
}


export default MainMenuItem