import React, {FC} from 'react';

import "./Discover.scss"
import Button from "../../components/Button/Button";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";

import avatar from "../../assets/img/avatar.webp"


const Discover: FC = () => {

    return <section className={"discover-section container"}>
        <img src={avatar} alt={"test img"}/>
        <div className={"discover-content"}>
            <h2>Discover <br/> who we are</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <Button
                text={"More"}
                icon={"angle-right"}
                color={ButtonColors.violet}
                className={"discover-button"}
            />
        </div>
    </section>;

}

export default Discover