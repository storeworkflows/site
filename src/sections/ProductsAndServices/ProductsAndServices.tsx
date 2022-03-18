import React from "react";
import Slider from "../../components/Slider/Slider";
import { SliderType } from "../../types/enums/Slider/SliderTypes";
import { slides } from "./mock";
import './ProductsAndServices.scss'

const ProductsAndServices = ()=>{

  return (
    <section id="products" className="container--fluid">
      <h2 >Products <span className="green">&</span> Services</h2>
      <Slider slides={slides} variant={SliderType.square} useControls useDots/>
    </section>
  )
}
export default ProductsAndServices