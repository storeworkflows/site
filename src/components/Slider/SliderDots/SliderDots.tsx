import React, { FC } from "react";
import { ISliderDots } from "../../../types/interfaces/ISliderDots";
import './SliderDots.scss'
const SliderDots: FC<ISliderDots> = ({ length, active, clickable, onClick }) => {

  return (
    <div className="dots">
      {[...Array(length)].map((dot, index) => (
        <div className={`dot 
          ${index === active ? 'active' : ''} 
          ${index === active - 1 || index === active + 1 ? "active-neighbour" : ''}`}
          key={index}
          onClick={() => clickable ? onClick(index) : null}></div>
      ))}
    </div>
  )
}
export default SliderDots