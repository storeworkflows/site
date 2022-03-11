import React, { useState, MouseEvent, useRef, useEffect } from "react";
import "./carousel.scss";
import face1 from '../../assets/img/face1.jpg'
import face2 from '../../assets/img/face2.jpg'
import face3 from '../../assets/img/face3.jpg'
import face4 from '../../assets/img/face4.jpg'
import face5 from '../../assets/img/face5.jpg'
interface Slide {
  img: string,
  alt?: string,
  header: string,
  text: string
}

const slides: Array<Slide> = [
  {
    img: face1,
    header: 'Person Persons',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates? Tempora aliquid exercitationem autem optio eum cumque, molestias eius recusandae repellat. Nisi ex ratione reprehenderit iure quisquam illum fuga, voluptate veniam tempora suscipit ea eaque at nam.'
  },
  {
    img: face2,
    header: 'Dabudi Dabudai',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates? Tempora aliquid exercitationem autem optio eum cumque, molestias eius recusandae repellat. Nisi ex ratione reprehenderit iure quisquam illum fuga, voluptate veniam tempora suscipit ea eaque at nam.'
  },
  {
    img: face3,
    header: 'Somebody Tolove',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates? Tempora aliquid exercitationem autem optio eum cumque, molestias eius recusandae repellat. Nisi ex ratione reprehenderit iure quisquam illum fuga, voluptate veniam tempora suscipit ea eaque at nam.'
  },
  {
    img: face4,
    header: 'Nevermind Ifind',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates? Tempora aliquid exercitationem autem optio eum cumque, molestias eius recusandae repellat. Nisi ex ratione reprehenderit iure quisquam illum fuga, voluptate veniam tempora suscipit ea eaque at nam.'
  },
  {
    img: face5,
    header: 'Someone Likeyou',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates? Tempora aliquid exercitationem autem optio eum cumque, molestias eius recusandae repellat. Nisi ex ratione reprehenderit iure quisquam illum fuga, voluptate veniam tempora suscipit ea eaque at nam.'
  }
]

function getInactiveSlideWidth(slidesRefs: Array<HTMLDivElement | null>): number {
  return Math.min(...slidesRefs.map(slide=>{return slide?.offsetWidth||0}))
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionDistance, setTransitionDistance] = useState(0)
  const length: number = slides.length;

  let containerRef = useRef<HTMLDivElement>(null)
  let carouselRef = useRef<HTMLDivElement>(null)
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
    <div ref={containerRef} className="outer-container">
      <div ref={carouselRef} className="carousel" style={{ transform: `translateX(${transitionDistance}px)` }}>
        {
          slides.map((slide, index) =>
            <div ref={el => { slideRefs.current[index] = el }} key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <div className="slide__image" onClick={()=>setActiveSlide(index)}>
                <img src={slide.img} alt={slide.alt} />
              </div>
              <div className="slide__info">
                <h2 className="slide__header">{slide.header}</h2>
                <p className="slide__text">{slide.text}</p>
              </div>
            </div>
          )}

      </div>
      <div className="controls">
        <button className="control" onClick={prevSlide} disabled={currentSlide === 0}>prev</button>
        <button className="control" onClick={nextSlide} disabled={currentSlide === length - 1}>next</button>
      </div>
    </div>

  );
};

export default Carousel;