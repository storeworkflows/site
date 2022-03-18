import React from "react";
import './CustomerReviews.scss'
import { slides } from "./mock";
import Slider from "../../components/Slider/Slider";
import { SliderType } from "../../types/enums/Slider/SliderTypes";
const CustomerReviews = () =>{
    return (
        <section id="reviews" className="container--fluid">
            <h2 >Customer Reviews</h2>
            
            <Slider 
              slides={slides} 
              variant={SliderType.round}
              useControls
              />
            
            
        </section>
        
        
    )
}

export default CustomerReviews 
