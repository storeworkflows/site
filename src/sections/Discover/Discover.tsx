import React, { FC } from 'react';

import "./Discover.scss"
import Button from "../../components/Button/Button";
import { ButtonColors } from "../../types/enums/Button/ButtonColors";
import { slides } from '../CustomerReviews/mock';
import { SliderType } from '../../types/enums/Slider/SliderTypes';
import Slider from '../../components/Slider/Slider';
import classnames from "classnames";


const Discover: FC = () => {

    const isTablet = window.innerWidth < 992;

    const renderHeader = (classes?: string) => <h2 className={classes}>Discover <br/> who we are</h2>

    return <div className={"discover full-width-wrapper"} id={"discover"}>
        <section className={"discover-section container"}>
            <div className={" tablet_header"}>{renderHeader()}</div>
            <div className={"discover__carousel-container"}>
                <Slider
                    slides={slides}
                    useControls={!isTablet}
                    useDots={isTablet}
                    infinite
                    variant={SliderType.simple}
                    defaultIndex={0} />
            </div>
            <div className={"discover-content"}>
                {renderHeader("desktop_header")}
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
        {/*<div className={"green-oval second decoration"}/>*/}
    </div>;
};

export default Discover