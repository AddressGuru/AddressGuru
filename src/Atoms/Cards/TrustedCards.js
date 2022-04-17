

const TrustedCard = (props) => {

        return (
               <div className="text-center px-4 py-8 rounded-xl border-white border-2 bg-white shadow-2xl hover:scale-105 ">
             <div className="">
             <div className="flex justify-center">
              <img src={props.image} className="w-2/5 "/>
              </div>
                      <div className="pt-4">
                      <h1 className="text-2xl ">{props.title}</h1>
                      <p className="text-gray-600 ">
                     {props.content}
                      </p>
                      <button className="btn btn-primary">View Details</button>
                      </div>
             </div>

                    
               </div>

        )
}


export default TrustedCard