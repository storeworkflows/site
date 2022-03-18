import { SliderType } from "../enums/Slider/SliderTypes";
import { ISlideContent } from "./ISlideContent";

export interface ISlider{
  slides: ISlideContent[],
  variant: SliderType,
  useDots?: boolean,
  useControls?: boolean,
  infinite?: boolean,
  defaultIndex: number
}