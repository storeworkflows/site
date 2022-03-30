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

    const renderHeader = () => <h2>Discover <br/> who we are</h2>
    const sectionClasses = classnames("discover-section", {"container" : !isTablet})
    const contentClasses = classnames("discover-content", {"container" : isTablet})

    return <div className={"discover full-width-wrapper"} id={"discover"}>
        <section className={sectionClasses}>
            {isTablet && <div className={"container"}>{renderHeader()}</div>}
            <div className={"discover__carousel-container"}>
                <Slider
                    slides={slides}
                    useControls={!isTablet}
                    useDots={isTablet}
                    infinite
                    variant={SliderType.simple}
                    defaultIndex={0} />
            </div>
            <div className={contentClasses}>
                {!isTablet && renderHeader()}
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
};

export default Discover