import React, { useState, MouseEvent, createRef, Ref, RefObject, useRef, useEffect } from "react";
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



const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionDistance, setTransitionDistance] = useState(0)
  const length: number = slides.length;

  let containerRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (currentSlide === 0) {
      const containerSize = containerRef.current?.offsetWidth || 0
      setTransitionDistance(containerSize / length / 2)
    }
    function handleResize() {
      setCurrentSlide(0)
    }
    window.addEventListener('resize', handleResize)
  }, [transitionDistance, length, currentSlide])
  const nextSlide = (event: MouseEvent) => {
    const slideNumber: number = currentSlide === length - 1 ? 0 : currentSlide + 1
    const containerSize = containerRef.current?.offsetWidth || 0
    setCurrentSlide(slideNumber)
    setTransitionDistance(transitionDistance - containerSize / length)
    console.log(transitionDistance + containerSize / length)
  }
  const prevSlide = (event: MouseEvent) => {
    const slideNumber: number = currentSlide === 0 ? length - 1 : currentSlide - 1
    setCurrentSlide(slideNumber)
    const containerSize = containerRef.current?.offsetWidth || 0
    setTransitionDistance(transitionDistance + containerSize / length)
    console.log(transitionDistance + containerSize / length)
  }




  return (
    <section ref={containerRef} className="container">
      <div className="carousel" style={{ transform: `translateX(${transitionDistance}px)` }}>
        {
          slides.map((slide, index) =>
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img className="slide__image" src={slide.img} alt={slide.alt} />
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
    </section>

  );
};

export default Carousel;