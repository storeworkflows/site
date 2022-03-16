import React from "react";
import './CustomerReviews.scss'
import { slides } from "./mock";
import Carousel from "../../components/Carousel/Carousel";
const CustomerReviews = () =>{
    return (
        <section className="container">
            <h2>Customer Reviews</h2>
            <Carousel slides={slides}/>
        </section>
        
        
    )
}

export default CustomerReviews 
