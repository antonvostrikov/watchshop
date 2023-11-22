import React from 'react'

import Slider from "react-slick";

type imageSlider = {
  img: string
}

type WatchImages = {
  sliderImages: imageSlider[]
}

const SliderProduct:React.FC<WatchImages> = ({ sliderImages }) => {
  const [nav1, setNav1] = React.useState()
  const [nav2, setNav2] = React.useState()
  const slider1 = React.useRef(null)
  const slider2 = React.useRef(null)

  React.useEffect(() => {
    slider1.current && setNav1(slider1.current)
    slider2.current && setNav2(slider2.current)
  }, [])

  return (
    <>
      <Slider
        ref={slider1}
        slidesToScroll={1}
        slidesToShow={1}
        swipeToSlide={true}
        autoplay={true}
        infinite={true}
      >
      { sliderImages && sliderImages.map(slider => <div><img src={slider.img} /></div>) }
    </Slider>
    <Slider
      slidesToShow={3}
      ref={slider2}
      swipeToSlide={true}
      focusOnSelect={true}
    >
      { sliderImages && sliderImages.map(slider => <div><img src={slider.img} /></div>) }
    </Slider>
    </>
  )
}

export default SliderProduct