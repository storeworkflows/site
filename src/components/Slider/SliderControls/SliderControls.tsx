import React, {FC} from "react";
import { ButtonTypes } from "../../../types/enums/Button/ButtonTypes";
import { ISliderControls } from "../../../types/interfaces/ISliderControls";
import Button from "../../Button/Button";
import './SliderControls.scss'
const SliderControls: FC<ISliderControls> = ({
  prevDisabled, 
  nextDisabled, 
  variant, 
  onClickPrev, 
  onClickNext
})=>{


  return (
    <div className={`controls controls--${variant}`}>
      <Button className="slider-control" type={ButtonTypes.additional} icon="angle-left" onClick={onClickPrev}/>
      <Button className="slider-control" type={ButtonTypes.additional} icon="angle-right" onClick={onClickNext}/>
    </div>
  )
}

export default SliderControls