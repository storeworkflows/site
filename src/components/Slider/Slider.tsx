import classnames from "classnames";
import React, {FC, useState, useRef, useEffect} from "react";
import { SliderType } from "../../types/enums/Slider/SliderTypes";
import { ISlider } from "../../types/interfaces/ISlider";
import SliderDots from "./SliderDots/SliderDots";
import Slide from "./Slide/Slide";
import SliderControls from "./SliderControls/SliderControls";
import './Slider.scss'
function getInactiveSlideWidth(slidesRefs: Array<HTMLDivElement | null>): number {
  return Math.min(...slidesRefs.map(slide => { return slide?.offsetWidth || 0 }))
}
function getTransitionDistance(slideWidth: number, slideIndex: number, variant: SliderType): number{
  switch(variant){
    case SliderType.round: return (slideWidth / 2) + slideWidth * -slideIndex;break;
    case SliderType.square: return (slideWidth / 1.35) + slideWidth * -slideIndex;
    case SliderType.simple: return slideWidth * -slideIndex;
  }
}
const Slider: FC<ISlider> = ({slides, variant, useDots, useControls}) => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [transitionDistance, setTransitionDistance] = useState(0)
  const length: number = slides.length;
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    if (currentSlide === 0) {
      setActiveSlide(0)
    }
    function handleResize() {
      setActiveSlide(1)
    }
    window.addEventListener('resize', handleResize)
  })

  const nextSlide = () => {
    console.log('NEXT SLIDE')
    const slideIndex: number = currentSlide === length - 1 ? 0 : currentSlide + 1
    setActiveSlide(slideIndex)
  }
  const prevSlide = () => {
    console.log('PREV  SLIDE')
    const slideIndex: number = currentSlide === 0 ? length - 1 : currentSlide - 1
    setActiveSlide(slideIndex)
  }
  const setActiveSlide = (slideIndex: number): void => {
    setCurrentSlide(slideIndex)
    translateCarousel(slideIndex)
  }
  const translateCarousel = (slideIndex: number) => {
    const slideWidth = getInactiveSlideWidth(slideRefs.current)
    console.log('translateCarousel', slideIndex, slideWidth)
    const transitionDistance = getTransitionDistance(slideWidth, slideIndex, variant)
    setTransitionDistance(transitionDistance)
    
  }
  return (
    <div className={`slider slider--${variant}`}>
      <div className={`slider__carousel slider__carousel--${variant}`} style={{transform: `translateX(${transitionDistance}px)`}}>
        {
          slides.map((slide, index)=>(   
            <Slide 
              ref={el=>slideRefs.current[index]=el}
              slide={slide} 
              variant={variant} 
              active={currentSlide === index} 
            />
          ))
        }
      </div>
      {useDots? 
        <SliderDots 
        length={length} 
        active={currentSlide} 
        clickable 
        onClick={setActiveSlide}
        />
        : null}
      {useControls? 
        <SliderControls 
          prevDisabled={currentSlide === 0 }
          nextDisabled={currentSlide === length - 1}
          variant={variant}
          onClickPrev={prevSlide}
          onClickNext={nextSlide}
           />
          :null}
    </div>
  )

}



export default Slider