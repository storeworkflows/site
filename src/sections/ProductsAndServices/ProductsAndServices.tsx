import React from "react";
import CarouselFlat from "../../components/CarouselSquare/CarouselSquare";
import { slides } from "../CustomerReviews/mock";
import './ProductsAndServices.scss'

const ProductsAndServices = ()=>{

  return (
    <div className="container">
      <h2 id="ProductsAndServices">Products <span className="green">&</span> Services</h2>
      <CarouselFlat slides={slides}/>
    </div>
  )
}
export default ProductsAndServices