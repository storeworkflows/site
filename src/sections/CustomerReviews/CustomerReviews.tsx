import React from "react";
import './CustomerReviews.scss'
import Carousel from "../../components/Carousel/Carousel";
import { slides } from "./mock";
const CustomerReviews = () =>{
    return (
        <section className="container">
            <h2 id="CustomerReviews">Customer Reviews</h2>
            <Carousel slides={slides}/>
        </section>
        
        
    )
}

export default CustomerReviews 
