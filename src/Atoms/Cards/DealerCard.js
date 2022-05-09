import React from "react";

const DealerCard=(props)=>{
        return(
                <div className="shadow-xl bg-white">
                <div className="relative">
                <button className="view_dealar_buttom absolute right-2 top-2 ">8 People Intrested</button>
<img src={props.image}/>
                </div>
                <div className="pt-4 pb-1 px-3">
                        <h2 className="text-gray-800 text-lg font-semibold">1 BHK Available for Rent</h2>
                       <div className="grid grid-cols-2">
<div>
<p>Apartmen</p>
</div>
<div>
<p className="float-right">1000 ft2</p>
</div>
                       </div>
                       <div className="grid grid-cols-2">
<div>
<p>12,0000</p>
</div>
<div >
<button className="view_button">VIEW</button>
</div>
                       </div>


                </div>
                </div>
        )
}

export default DealerCard