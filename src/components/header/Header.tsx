import React from "react";
import youtube from "../../assets/img/socialIcon/jam_youtube-circle.png"
import instagram from "../../assets/img/socialIcon/bx_bxl-instagram-alt.png"
import facebook from "../../assets/img/socialIcon/brandico_facebook-rect.png"
import linkedin from "../../assets/img/socialIcon/jam_linkedin-circle.png"
import twitter from "../../assets/img/socialIcon/jam_twitter-circle.png"
import badger from "../../assets/img/Honey_badger.png"

import Navigation from "./Navigation";
import "./header.scss";
import Button from "../Button/Button";
import {ButtonTypes} from "../../types/enums/Button/ButtonTypes";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";


type HeaderProps = {

}
const Header:React.FC<HeaderProps> = ({}): JSX.Element => {
    return (
        <header className="header">
            <Navigation />
            <div className="header__container container">

                <h1 className="header__container__tittle">Digitize Store Workflows on ServiceNow</h1>
                <p className="header__container__subtittle">Retail operations can be complicated and difficult to track. With StoreWorkflows, you can boost productivity and increase accountability by digitizing workflows on the ServiceNow platform.</p>
                <div className="header__container__actions">
                    <Button text={"Let`s talk"} />
                    <Button text={"Learn more"} type={ButtonTypes.secondary} color={ButtonColors.violet}/>
                </div>
                <div className="header__container__socials">
                    <ul className="nav__socials">
                        <li className="socials__item">
                            <img src={linkedin} alt="linkedin"/>
                        </li>
                        <li className="socials__item">
                            <img src={youtube} alt="youtube"/>
                        </li>
                        <li className="socials__item">
                            <img src={instagram} alt="instagram"/>
                        </li>
                        <li className="socials__item">
                            <img src={facebook} alt="facebook"/>
                        </li>
                        <li className="socials__item">
                            <img src={twitter} alt="twitter"/>
                        </li>
                    </ul>
                </div>
                <div className="badger">
                    <img src={badger} alt="badger"/>
                </div>
            </div>
            <div className="circle"></div>
        </header>

    );
};

export default Header;