import React, { useState, MouseEvent, useRef, useEffect, FC } from "react";
import "./Carousel.scss";
import Button from "../Button/Button";
import { ButtonTypes } from "../../types/enums/Button/ButtonTypes";
import { ButtonColors } from "../../types/enums/Button/ButtonColors";
import { ICarousel } from "../../types/interfaces/ICarousel";

function getInactiveSlideWidth(slidesRefs: Array<HTMLDivElement | null>): number {
  return Math.min(...slidesRefs.map(slide => { return slide?.offsetWidth || 0 }))
}
const defaultProps = { slides: [] }
const Carousel: FC<ICarousel> = ({
  slides
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionDistance, setTransitionDistance] = useState(0)
  const length: number = slides.length;

  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
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
    const transitionDistance = (slideWidth / 2) + (slideWidth) * -slideIndex
    setTransitionDistance(transitionDistance)
    
  }

  return (
    <div className="outer-container">
      <div className="carousel" style={{ transform: `translateX(${transitionDistance}px)` }}>
        {
          slides.map((slide, index) =>
            <div ref={el => { slideRefs.current[index] = el }} key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <div className="slide__image" onClick={() => setActiveSlide(index)}>
                <img src={slide.img} alt={slide.alt} />
              </div>
              <div className="slide__info">
                <h3 className="slide__header">{slide.header}</h3>
                <p className="slide__text">{slide.text}</p>
              </div>
            </div>
          )}

      </div>
      <div className="controls">
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

  );
};
Carousel.defaultProps = defaultProps
export default Carousel;