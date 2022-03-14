import React, {FC} from 'react';

import paw from "../../assets/img/paw.png"
import "./Advantages.scss"
import List from "../../components/List/List";
import {advantages} from "../../constants";


const Advantages: FC = () => {

    return <section className={"advantages-section container"}>
        <h2>Our Advantages</h2>
        <div className={"advantage-content"}>
            <List listOptions={advantages}/>
            <img src={paw} alt={"paw"} className={"paw-img"}/>
        </div>
    </section>;

}

export default Advantages