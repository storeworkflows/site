import React from "react";
import CarouselFlat from "../../components/CarouselSquare/CarouselSquare";
import Slider from "../../components/Slider/Slider";
import { SliderType } from "../../types/enums/Slider/SliderTypes";
import { slides } from "../CustomerReviews/mock";
import './ProductsAndServices.scss'

const ProductsAndServices = ()=>{

  return (
    <div className="container--fluid">
      <h2 id="ProductsAndServices">Products <span className="green">&</span> Services</h2>
      <Slider slides={slides} variant={SliderType.simple}/>
    </div>
  )
}
export default ProductsAndServices