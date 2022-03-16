import React from "react";
import './CustomerReviews.scss'
import Carousel from "../../components/Carousel/Carousel";
import { slides } from "./mock";
import Slider from "../../components/Slider/Slider";
import { SliderType } from "../../types/enums/Slider/SliderTypes";
const CustomerReviews = () =>{
    return (
        <section className="container--fluid">
            <h2 id="CustomerReviews">Customer Reviews</h2>
            
            <Slider 
              slides={slides} 
              variant={SliderType.round}
              useControls
              />
            
            
        </section>
        
        
    )
}

export default CustomerReviews 
