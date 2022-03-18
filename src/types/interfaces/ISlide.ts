import { SliderType } from "../enums/Slider/SliderTypes";
import { ISlideContent } from "./ISlideContent";

export interface ISlide {
  slide: ISlideContent,
  active: boolean,
  variant: SliderType
}