import React, { FC } from "react";
import { ICarouselDots } from "../../../types/interfaces/ICarouselDots";
import './CarouselDots.scss'
const CarouselDots: FC<ICarouselDots> = ({ length, active, clickable, onClick }) => {

console.log('Dots?',length) //?

  return (
    <div className="dots">
      {[...Array(length)].map((dot, index) => (
        <div className={`dot 
          ${index === active ? 'active' : ''} 
          ${index === active - 1 || index === active + 1 ? "active-neighbour" : ''}`}
          onClick={() => clickable ? onClick(index) : null}></div>
      ))}
    </div>
  )
}
export default CarouselDots