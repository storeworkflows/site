import React, {FC} from 'react';

import "./Discover.scss"
import Button from "../../components/Button/Button";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";

import CarouselSimple from '../../components/CarouselSimple/CarouselSimple';
import { slides } from '../CustomerReviews/mock';


const Discover: FC = () => {

    return <div className={"discover full-width-wrapper"} id={"discover"}>
        <section className={"discover-section container"}>
            <div className={"discover__carousel-container"}>
                <CarouselSimple slides={slides}/>
            </div>
            <div className={"discover-content"}>
                <h2>Discover <br/> who we are</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <Button
                    text={"More"}
                    icon={"angle-right"}
                    color={ButtonColors.orange}
                    className={"discover-button"}
                />
            </div>
        </section>
        <div className={"blue-oval decoration"}/>
        <div className={"green-oval decoration"}/>
        <div className={"green-oval second decoration"}/>
    </div>;

}

export default Discover