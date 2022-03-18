import React, { FC, forwardRef } from "react";
import { ISlide } from "../../../types/interfaces/ISlide";
import './Slide.scss'
const Slide = forwardRef<HTMLDivElement,ISlide> (({slide, variant, active}, ref)=>{
  
  return (
    <div className={`slide slide--${variant} ${active ? 'slide--active' : ''}`} ref={ref}>
      
      <div className="slide__frame">
        <img className="slide__frame-image" src={slide.img} alt={slide.alt}/>
      </div>
      <div className="slide__info">
        <h3 className="slide__info-heading">{slide.header}</h3>
        <p className="slide__info-paragraph">{slide.text}</p>
      </div>
    </div>
  )
}) 
export default Slide