export interface ICarouselDots{
  length: number,
  active: number,
  clickable: boolean,
  onClick: (index: number) => void,
}