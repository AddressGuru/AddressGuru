import TrustedCard from "../../Atoms/Cards/TrustedCards"
import TrustData from "../../Asset/Sampledata/TrustData"
const Trusted = () => {

        return (
              <div className="px-80 bg-gray-200 py-20">
              <h1 className="text-center mb-16"><b className="text-blue-500">Trusted By 1,000 Web Hosts For</b> Domains & Hosting</h1>
                       <div className="grid grid-cols-3 gap-8 ">
                     {TrustData.map((items,i)=>(
                        <TrustedCard image={items.image} title={items.title} content={items.content}/>
                     ))}

                    
                     
               </div>
              </div>

        )
}


export default Trusted