import TrustedCard from "../../Atoms/Cards/TrustedCards"
import TrustData from "../../Asset/Sampledata/TrustData"
const Trusted = () => {

        return (
              <div className="lg:px-48 sm:px-16 bg-gray-200 lg:py-20 py-8">
              <h1 className="text-center lg:text-4xl text-2xl lg:mb-16 mb-8"><b className="text-blue-500">Trusted By 1,000 Web Hosts For</b> Domains & Hosting</h1>
                       <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-8 ">
                     {TrustData.map((items,i)=>(
                        <TrustedCard image={items.image} title={items.title} content={items.content}/>
                     ))}
               </div>
              </div>

        )
}


export default Trusted