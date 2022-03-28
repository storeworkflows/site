import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, {FC} from "react";
import { ButtonColors } from "../../../types/enums/Button/ButtonColors";
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
      <Button 
        className="slider-control" 
        type={ButtonTypes.additional} 
        color={ButtonColors.green}
        icon="angle-left" 
        onClick={onClickPrev}
        disabled={prevDisabled}
        
        />
      <Button 
        className="slider-control" 
        type={ButtonTypes.additional} 
        color={ButtonColors.green}
        icon="angle-right" 
        onClick={onClickNext}
        disabled={nextDisabled}/>
    </div>
  )
}

export default SliderControls