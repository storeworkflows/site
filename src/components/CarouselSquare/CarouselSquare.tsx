import React, { FC, useEffect, useRef, useState } from "react";
import { ICarousel } from "../../types/interfaces/ICarousel";
import CarouselDots from "./CarouselDots/CarouselDots";
import './CarouselSquare.scss'
const defaultProps = {slides: []}
const CarouselFlat: FC<ICarousel> = ({slides}) => {
  const slideRefs = useRef<(HTMLDivElement|null)[]>([])
  
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
  const setActiveSlide = (slideIndex: number): void => {
    setCurrentSlide(slideIndex)
    translateCarousel(slideIndex)
  }
  const translateCarousel = (slideIndex: number) => {
    const slideWidth = slideRefs.current[0]?.offsetWidth || 0
    const transitionDistance = (slideWidth / 2) + slideWidth * -slideIndex
    setTransitionDistance(transitionDistance)
    
  }

  return (
    <div className="carousel-container">
      <div className="carousel--square" style={{transform: `translateX(${transitionDistance}px)`}}>
        {slides.map((slide, index) =>(
          <div ref={el=> {slideRefs.current[index] = el}} className={`slide--square ${index === currentSlide? 'active': ''}`} key={index}>
            <div className="slide-info--square">
              <h3>{slide.header}</h3>
              <p>{slide.text}</p>
            </div>
            <div className="slide-image--square" onClick={()=>setActiveSlide(index)}>
              <img src={slide.img} alt={slide.alt} />
            </div>
          </div>
        )
        )}
        
      </div>
      <CarouselDots
          length={slides.length}
          active={currentSlide}
          clickable={true}
          onClick={setActiveSlide}
        />
    </div>
  )
}


CarouselFlat.defaultProps = defaultProps
export default CarouselFlat