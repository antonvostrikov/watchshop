import React from 'react'

import Slider from "react-slick";

type imageSlider = {
  img: string
}

type WatchImages = {
  sliderImages: imageSlider[]
}

const SliderProduct:React.FC<WatchImages> = ({ sliderImages }) => {
  const sliderSettings = {
    customPaging: function(i: number) {
      return (
        <a>
          <img src={`https://www.alltime.ru/obj/catalog/watch/casio/img/big/DW-5600BB-1E__${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <Slider {...sliderSettings}>
      {sliderImages.map(image => {
        return (
          <div className="slider-image">
            <img src={image.img} alt="" />
          </div>
        )
      })}
      
    </Slider>
  )
}

export default SliderProduct