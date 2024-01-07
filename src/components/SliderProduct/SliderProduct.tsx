import React from 'react'

import Slider from "react-slick";
import Modal from '../Modal/Modal';

import CloseSvg from '../../ímg/close.svg'
import NextArrowSvg from '../../ímg/arrow-right-slider.svg'
import PrevArrowSvg from '../../ímg/arrow-left-slider.svg'

import { ISliderProductPropos } from '../../interfaces/slider.interface'

const settingsSlider = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  focusOnSelect: true,
  swipeToSlide: true,
  autoplay: false
}

const settingsSliderNav = {
  slidesToScroll: 1,
  infinite: true,
  focusOnSelect: true,
  swipeToSlide: true,
  vertical: true,
  verticalSwiping: true,
  autoplay: false
}

const settingsModalSlider = {
  infinite: true,
  swipeToSlide: true,
  focusOnSelect: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

const SliderProduct:React.FC<ISliderProductPropos> = ({ sliderImages }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [slidesCount, setSlidesCount] = React.useState<number>()
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [nav1, setNav1] = React.useState<Slider | undefined>()
  const [nav2, setNav2] = React.useState<Slider | undefined>()

  const slider1 = React.useRef<Slider>(null)
  const slider2 = React.useRef<Slider>(null)
  const sliderModalRef = React.useRef<Slider>(null)

  React.useEffect(() => {
    slider1.current && setNav1(slider1.current)
    slider2.current && setNav2(slider2.current)
    sliderModalRef.current && setNav2(sliderModalRef.current)
  }, [])

  React.useEffect(() => {
    if (sliderImages.length > 4) {
      setSlidesCount(4)
    } else {
      setSlidesCount(sliderImages.length)
    }
  }, [sliderImages])

  React.useEffect(() => {
    slider1.current && slider1.current.slickGoTo(currentSlide)
    slider2.current && slider2.current.slickGoTo(currentSlide)
    sliderModalRef.current && sliderModalRef.current.slickGoTo(currentSlide)
  }, [currentSlide])

  const handleSliderAfterChange = (currentSlideAfterChange: number) => {
    setCurrentSlide(currentSlideAfterChange)
  }

  const handleNextSlide = () => {
    slider1.current && slider1.current.slickNext()
  }
  
  const handlePrevSlide = () => {
    slider1.current && slider1.current.slickPrev()
  }

  const NextSliderArrow = () => {
    return (
      <div className="next-arrow" onClick={handleNextSlide}>
        <img src={NextArrowSvg} alt="Next" />
      </div>
    )
  }

  const PrevSliderArrow = () => {
    return (
      <div className="prev-arrow" onClick={handlePrevSlide}>
        <img src={PrevArrowSvg} alt="Prev" />
      </div>
    )
  }

  return (
    <>
    <div className="product-slider__main">
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <Modal.Header>
          <div className="modal-close">
            <span onClick={() => setIsModalOpen(false)}><img src={CloseSvg} alt="" /></span>
          </div>
        </Modal.Header>
        <Modal.Content>
          <Slider
            afterChange={() => handleSliderAfterChange(currentSlide)}
            initialSlide={currentSlide}
            asNavFor={nav2}
            ref={sliderModalRef}
            {...settingsModalSlider}
            nextArrow={<NextSliderArrow />}
            prevArrow={<PrevSliderArrow />}
          >
          { sliderImages && sliderImages.map((slide, index) => <div>
            <img src={slide.img} alt={`Слайд ${index}`} />
          </div>) }
          </Slider>
        </Modal.Content>
      </Modal>
      <Slider
        {...settingsSlider}
        ref={slider1}
        asNavFor={nav2}
        initialSlide={currentSlide}
        afterChange={() => handleSliderAfterChange(currentSlide)}
      >
        { sliderImages && sliderImages.map((slide, index) => <div className="slide-product__main" onClick={() => setIsModalOpen(true)}>
          <img src={slide.img} alt={`Слайд ${index}`} />
        </div>) }
      </Slider>
    </div>
    <div className="product-slider__nav">
      <Slider
        {...settingsSliderNav}
        ref={slider2}
        asNavFor={nav1}
        initialSlide={currentSlide}
        afterChange={() => handleSliderAfterChange(currentSlide)}
        slidesToShow={slidesCount}
      >
        { sliderImages && sliderImages.map((slide, index) => <div className="slide-product__nav">
          <img src={slide.img} alt={`Слайд ${index}`} />
        </div>) }
      </Slider>
    </div>  
    </>
  )
}

export default SliderProduct