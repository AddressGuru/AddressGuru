import React from "react";
import Landing from "../../Asset/Image/landing1.png"
import Landing2 from "../../Asset/Image/landing2.png"
import Landing3 from "../../Asset/Image/landing3.png"
import { Carousel } from "react-bootstrap";
import LandingContact from "./Mobile/LandingContact";


const ThumbnailSlider=()=>{
        return(
                <div>
                        <div className="grid grid-cols-1 bg-white p-2 ">
<div className="thumbnailslider">
  <Carousel >
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
</div>


                </div>
        )
}

export default ThumbnailSlider;