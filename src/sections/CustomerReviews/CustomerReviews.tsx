import React from "react";
import './CustomerReviews.scss'
import { slides } from "./mock";
import Slider from "../../components/Slider/Slider";
import { SliderType } from "../../types/enums/Slider/SliderTypes";
const CustomerReviews = () => {
  return (
    <>
    <div id="reviews" className="container container__customer-reviews">
    <h2>Customer Reviews</h2>
    </div>
      <section className="container--fluid">
        <Slider
          slides={slides}
          variant={SliderType.round}
          useControls
          defaultIndex={1}
        />
      </section>

    </>
  )
}

export default CustomerReviews 
