import TrustedCard from "../../Atoms/Cards/TrustedCards"
import TrustData from "../../Asset/Sampledata/TrustData"
const Trusted = () => {

      return (
            <div className="container ">
                  <div className="  lg:py-20 py-8 lg:px-20 xl:px-20 ">
                        <h1 className="text-center lg:text-4xl text-2xl lg:mb-16 mb-8 md:px-2"><b className="text-blue-500">Trusted By 1,000 Web Hosts For</b> Domains & Hosting</h1>
                        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 grid grid-cols-1 gap-8 sidePadding ">
                              {TrustData.map((items, i) => (
                                    <TrustedCard image={items.image} title={items.title} content={items.content} />
                              ))}
                        </div>
                  </div>
            </div>

      )
}


export default Trusted