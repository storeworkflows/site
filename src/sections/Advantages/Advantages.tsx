import React, {FC} from 'react';

import paw from "../../assets/img/paw.png"
import "./Advantages.scss"
import List from "../../components/List/List";
import {advantages} from "../../constants";

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const Advantages: FC = () => {
    const isMobile = window.innerWidth < 450;

    return <div className={"advantages-wrapper full-width-wrapper"} id={"advantages"}>
        <section className={"advantages-section container"}>
            <h2>Our Advantages</h2>
            <p>
                { !isMobile && <img src={paw} alt={"paw"} className={"paw-img"}/>}
                <List listOptions={advantages} className={"advantage-list"}/>

            </p>
        </section>
    </div>;

}

export default Advantages