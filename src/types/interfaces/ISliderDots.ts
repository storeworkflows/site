import { SliderType } from "../enums/Slider/SliderTypes";

export interface ISliderDots{
  length: number,
  active: number,
  clickable: boolean,
  variant: SliderType,
  onClick: (index: number) => void,
}