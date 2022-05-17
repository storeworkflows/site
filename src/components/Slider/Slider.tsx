
import React, { FC, useState, useRef, useEffect, TouchEvent } from "react";
import { SliderType } from "../../types/enums/Slider/SliderTypes";
import { ISlider } from "../../types/interfaces/ISlider";
import SliderDots from "./SliderDots/SliderDots";
import Slide from "./Slide/Slide";
import SliderControls from "./SliderControls/SliderControls";
import './Slider.scss'
function getInactiveSlideWidth(slidesRefs: Array<HTMLDivElement | null>): number {
  return Math.min(...slidesRefs.map(slide => { return slide?.offsetWidth || 0 }))
}
function getTransitionDistance(slideWidth: number, slideIndex: number, variant: SliderType): number {
  switch (variant) {
    case SliderType.round: return (slideWidth / 2) + slideWidth * -slideIndex;
    case SliderType.square: return (slideWidth / 2) + slideWidth * -slideIndex;
    case SliderType.simple: return slideWidth * -slideIndex;
    default: return 0;
  }
}
const Slider: FC<ISlider> = (
  {
    slides,
    variant,
    useDots,
    useControls,
    infinite,
    defaultIndex
  }) => {
  const [currentSlide, setCurrentSlide] = useState(defaultIndex)
  const [transitionDistance, setTransirionDistance] = useState(0)
  const [transitionStyle, setTransitionStyle] = useState({ transform: 'translateX(0)' })
  const [nextTransition, setNextTransition] = useState(0)
  const [touchStartPos, setTouchStartPos] = useState(0)
  const length: number = slides.length;
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {

     setActiveSlide(defaultIndex)
    //window.addEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    const slideIndex: number = currentSlide === length - 1 ? 0 : currentSlide + 1
    setActiveSlide(slideIndex)
  }
  const prevSlide = () => {
    const slideIndex: number = currentSlide === 0 ? length - 1 : currentSlide - 1
    setActiveSlide(slideIndex)
  }
  const setActiveSlide = (slideIndex: number): void => {
    setCurrentSlide(slideIndex)
    translateCarousel(slideIndex)
  }
  const translateCarousel = (slideIndex: number) => {
    const slideWidth = getInactiveSlideWidth(slideRefs.current)
    const nextTransitionDistance = getTransitionDistance(slideWidth, slideIndex, variant)
    setTransitionStyle({ transform: `translateX(${nextTransitionDistance}px)` })
    setTransirionDistance(nextTransitionDistance)
  }

  const touchStart = (e: TouchEvent) => {
    setTouchStartPos(e.touches[0].clientX)
  }
  const touchEnd = () => {
    setTransirionDistance(nextTransition)
    if (transitionDistance - nextTransition > 100 && currentSlide !== length - 1) nextSlide()
    else if (transitionDistance - nextTransition < -100 && currentSlide !== -0) prevSlide()
    else setActiveSlide(currentSlide)
  }
  const touchMove = (e: TouchEvent) => {
    const swipeDistance = e.touches[0].clientX
    setNextTransition(transitionDistance + swipeDistance - touchStartPos)
    setTransitionStyle({ transform: `translateX(${nextTransition}px)` })
  }
  return (
    <div className={`slider slider--${variant}`}>
      <div
        className={`slider__carousel slider__carousel--${variant}`}
        style={transitionStyle}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        onTouchMove={touchMove}
      >
        {
          slides.map((slide, index) => (
            <Slide
              ref={el => slideRefs.current[index] = el}
              key={index}
              slide={slide}
              variant={variant}
              active={currentSlide === index}
            />
          ))
        }
      </div>
      {useDots ?
        <SliderDots
          length={length}
          active={currentSlide}
          clickable
          variant={variant}
          onClick={setActiveSlide}
        />
        : null}
      {useControls ?
        <SliderControls
          prevDisabled={currentSlide === 0 && !infinite}
          nextDisabled={currentSlide === length - 1 && !infinite}
          variant={variant}
          onClickPrev={prevSlide}
          onClickNext={nextSlide}
        />
        : null}
    </div>
  )

}



export default Slider