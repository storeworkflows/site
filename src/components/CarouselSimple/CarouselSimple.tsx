import React, { FC, useEffect, useRef, useState } from "react";
import { ButtonColors } from "../../types/enums/Button/ButtonColors";
import { ButtonTypes } from "../../types/enums/Button/ButtonTypes";
import { ISlider } from "../../types/interfaces/ISlider";
import Button from "../Button/Button";
import './CarouselSimple.scss'
const defaultProps = {slides: []}
const CarouselSimple: FC<ISlider> = ({slides}) => {
  const slideRefs = useRef<(HTMLDivElement|null)[]>([])
  const length = slides.length
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitionDistance, setTransitionDistance] = useState(0)
  useEffect(() => {
    if (currentSlide === 0) {
      setActiveSlide(0)
    }
    function handleResize() {
      setActiveSlide(0)
    }

    window.addEventListener('resize', handleResize)
  })
  const nextSlide = () => {
    const slideIndex: number = currentSlide === length - 1 ? 0 : currentSlide + 1
    setActiveSlide(slideIndex)
    console.log('click')
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
    const slideWidth = slideRefs.current[0]?.offsetWidth || 0
    const transitionDistance = slideWidth * -slideIndex
    setTransitionDistance(transitionDistance)
    
  }

  return (
    <div className="carousel-container--simple">
      <div className="carousel--simple" style={{transform: `translateX(${transitionDistance}px)`}}>
        {slides.map((slide, index) =>(
          <div ref={el=> {slideRefs.current[index] = el}} className={`slide--simple ${index === currentSlide? 'active': ''}`} key={index}>
            {/* <div className="slide-info--simple">
              <h3>{slide.header}</h3>
              <p>{slide.text}</p>
            </div> */}
            <div className="slide-image--simple" onClick={()=>setActiveSlide(index)}>
              <img src={slide.img} alt={slide.alt} />
            </div>
          </div>
        )
        )}
      </div>
      <div className="controls--simple">
        <Button
          type={ButtonTypes.additional}
          color={currentSlide === 0 ? ButtonColors.dark : ButtonColors.green}
          icon="angle-left"
          onClick={prevSlide} />
        <Button
          type={ButtonTypes.additional}
          color={currentSlide === length - 1 ? ButtonColors.dark : ButtonColors.green}
          icon="angle-right"
          onClick={nextSlide} />
      </div>
    </div>
  )
}


CarouselSimple.defaultProps = defaultProps
export default CarouselSimple