import Landing from "../../Asset/Image/landing1.png"
import Landing2 from "../../Asset/Image/landing2.png"
import Landing3 from "../../Asset/Image/landing3.png"
import Carousel from 'react-bootstrap/Carousel'

const LandingFirstLeft = () => {
  return (
    <div>

      <div className="grid grid-cols-1 bg-white py-4 px-4">
        <div>
          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Landing}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Landing2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Landing3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <br />
          <h3 className="font-semibold">About Us
          </h3>
          <hr />
          <p className="text-sm">

            Best Astrologer in Dehradun Jaimini Astro the famous people in Dehradun for his prediction. He specializes in Vaastu, our mission is to bring positive change in the area of relationship, Career health business, etc,
          </p>
        </div>

        <div className="py-4">
          <h3 className="font-semibold">Services
          </h3>
          <hr />
          <p className=" font-semibold">
          Astrologer SK Shastri ji provides below services
          </p>
          <div className="px-4 grid grid-cols-2">
            <div>
              <li className="text-sm">Complete Predictions</li>
              <li className="text-sm">Health Outlook</li>
              <li className="text-sm">Prosperity & Wealth</li>
            </div>
            <div>
              <li className="text-sm">Marriage & Compatibility</li>
              <li className="text-sm">Career Forecast</li>
              <li className="text-sm">Children Matters</li>
            </div>

          </div>
        </div>



        <div className="py-4">
          <h3 className="font-semibold">Payment Mode
          </h3>
          <hr />
          <p className=" font-semibold">
            JAIMINI ASTRO acceptable payment modes::
          </p>
          <div className="px-4">
            <li className="text-sm">Cash</li>
            <li className="text-sm">Debit/Credit Card</li>
            <li className="text-sm">Net Banking</li>
            <li className="text-sm">Other</li>
          </div>
        </div>


        <div className="py-4">
          <h3 className=" font-semibold">Business Hours
          </h3>
          <hr />
          <p className=" font-semibold">
            Astrologer SK Shastri ji
          </p>
          <div className="px-4">
            <div className="grid grid-cols-2">
              <div>
                <ul>
                  <li>Monday </li>
                  <li>Tuesday </li>
                  <li>Wednesday </li>
                  <li>Thursday </li>
                  <li>Friday  </li>
                  <li>Saturday  </li>
                  <li>Sunday  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="text-green-500 font-bold">24 Hours </li>
                  <li className="text-green-500 font-bold">24 Hours </li>
                  <li className="text-green-500 font-bold">24 Hours </li>
                  <li className="text-green-500 font-bold">24 Hours </li>
                  <li className="text-red-500 font-bold">Closed  </li>
                  <li className="text-green-500 font-bold">24 Hours  </li>
                  <li className="text-green-500 font-bold">24 Hours  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-12">
            <div>
              <h3 className=" font-semibold">State
              </h3>
              <hr />
              <p className=" font-semibold">
                Uttarakhand
              </p>
            </div>
            <div>
              <h3 className=" font-semibold">City
              </h3>
              <hr />
              <p className=" font-semibold">
                Dehradun
              </p>
            </div>

          </div>
        </div>


      </div>


    </div>


  )
}


export default LandingFirstLeft