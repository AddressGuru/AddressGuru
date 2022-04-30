import { useContext, useState, useEffect } from "react"
import { Context } from "../../Api/MarketPlace"
import MainMenuData from "../../Asset/Sampledata/HomePageMenu"
import MarketPlaceCards from "../../Atoms/Cards/MarketPlaceCards"
import marketplace from "../../Asset/Image/marketplace.png"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"

const MarketPlace = () => {

        // --------------------ContextAPI---------------------
        const { value1, value2 } = useContext(Context)
        const [data, setData] = value1;
        const [load, setLoad] = value2;
        // --------------------ContextAPI---------------------


        // ----------------------useState----------------------
        const [market, setMarket] = useState([])
        const [status, setstatus] = useState(false)
        // ----------------------useState----------------------

        // -----------------function--------------------
        function marketData(e) {
        }
        // -----------------function--------------------


        // --------------------------useeffect------------------------
        function GetData() {
                var requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                };

                fetch("https://www.addressguru.in/api/marketplace/products?init=1&from=0&take=10", requestOptions)
                        .then(response => response.json())
                        .then(result => {
                                setMarket(result)
                                setstatus(true)
                        })
                        .catch(error => console.log('error', error));
        }
        // --------------------------useeffect------------------------

        // --------------------------useeffect------------------------
        useEffect(() => {
                GetData()
        }, [])
        // --------------------------useeffect------------------------



        console.log(data)
        return (
                
                        <div className="container-fluid px-0 bg-gray-100 mt-8">
                                <div className=" lg:mb-4 mb-2">
                                        <img src={marketplace} className="w-full" />
                                </div>

                                {/* <h1 className="text-center text-blue-500 font-sans font-bold mb-10">Market Place is Here </h1> */}
                                {load ? <div className="container">
                                <div className="lg:px-20 xl:px-20 lg:block hidden">

                                        <div className="px-2 pt-4 mb-0">

                                                <OwlCarousel items="9" autoWidth="true">
                                                        {data.map((items, i) => (
                                                                <button onClick={() => marketData(items.name)} className=" text-gray-500 border-2 px-3 ml-1 rounded-2xl pb-1 text-xs hover:bg-blue-500 hover:text-white focus:text-white focus:scale-90 focus:bg-blue-500">{items.name} ({items.products})</button>
                                                        ))}
                                                </OwlCarousel>
                                        </div>
                                        <hr />
                                        <p className="mb-1 px-2">Searches in <span className="font-bold">"Dehradun"</span></p>

                                </div>
                                </div>

                                        : <div>
                                        </div>}

                                {status ? <div className="container">
                                <div className="lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 grid grid-cols-2 lg:px-20 xl:px-20
                        
                        
                         gap-4 lg:py-10 sidePadding">

                                        {market.records.map((items, i) => (
                                                <MarketPlaceCards data={items} />
                                        ))}

                                </div>
                                </div> : <div>
                                </div>}
                        </div>
               

        )
}


export default MarketPlace