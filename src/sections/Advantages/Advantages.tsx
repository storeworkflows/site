import React, {FC} from 'react';

import paw from "../../assets/img/paw.png"
import "./Advantages.scss"
import List from "../../components/List/List";
import {advantages} from "../../constants";


const Advantages: FC = () => {

    return <div className={"advantages-wrapper full-width-wrapper"}>
        <section className={"advantages-section container"}>
            <h2>Our Advantages</h2>
            <List listOptions={advantages} className={"advantage-list"}/>
            <img src={paw} alt={"paw"} className={"paw-img"}/>
        </section>

    </div>;

}

export default Advantages