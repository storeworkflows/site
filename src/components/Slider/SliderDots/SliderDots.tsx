import React, { FC } from "react";
import { ISliderDots } from "../../../types/interfaces/ISliderDots";
import './CarouselDots.scss'
const SliderDots: FC<ISliderDots> = ({ length, active, clickable, onClick }) => {

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
export default SliderDots