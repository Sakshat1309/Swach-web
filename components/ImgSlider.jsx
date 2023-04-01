import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            height={"270rem"}
            width={"80%"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0 3px 10px rgb(250 255 255 / 0.3)",
            }}
            src="/cyber_sec1.png"
            alt="Hi"
          />
        </div>
        <div>
          <img
            height={"250vh"}
            width={"80%"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgb(250 255 255 / 0.3)",
            }}
            src="/cyber_sec2.jpeg"
            alt="Hi"
          />
        </div>
        <div>
          <img
            height={"250vh"}
            width={"80%"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgb(250 255 255 / 0.3)",
            }}
            src="/cyber_sec3.jpeg"
            alt="Hi"
          />
        </div>
        <div>
          <img
            height={"250vh"}
            width={"80%"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgb(250 255 255 / 0.3)",
            }}
            src="/cyber_sec4.webp"
            alt="Hi"
          />
        </div>
      </Slider>
    </>
  );
}

export default ImgSlider;