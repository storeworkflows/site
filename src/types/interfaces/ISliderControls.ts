import { SliderType } from "../enums/Slider/SliderTypes";

export interface ISliderControls {
  prevDisabled: boolean,
  nextDisabled: boolean,
  variant: SliderType,
  onClickPrev: () => void
  onClickNext: () => void
}