import React from "react";
import './CustomerReviews.scss'
import { slides } from "./mock";
import Slider from "../../components/Slider/Slider";
import { SliderType } from "../../types/enums/Slider/SliderTypes";
const CustomerReviews = () => {
  return (
    <>
    <div className="container container__customer-reviews">
    <h2 id="CustomerReviews">Customer Reviews</h2>
    </div>
      <section className="container--fluid">
        

        <Slider
          slides={slides}
          variant={SliderType.round}
          useControls
        />


      </section>

    </>
  )
}

export default CustomerReviews 
