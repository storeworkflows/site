export interface ISliderDots{
  length: number,
  active: number,
  clickable: boolean,
  onClick: (index: number) => void,
}