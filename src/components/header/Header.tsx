import React from "react";
import badger from "../../assets/img/Honey_badger.png"

import Navigation from "./Navigation";
import "./header.scss";
import Carousel from "../carousel/Carousel";
import Button from "../Button/Button";
import {ButtonTypes} from "../../types/enums/Button/ButtonTypes";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";
import {IIconLink} from "../../types/interphases/IIconLink";
import IconLinkGroup from "../IconLinkGroup/IconLinkGroup";
import {MainColors} from "../../types/enums/MainColors";

const iconLinks: IIconLink[] = [
    {
        icon: "linkedin-in",
        link: "https://linkedin.com/"
    },
    {
        icon: "youtube",
        link: "https://youtube.com/"
    },
    {
        icon: "instagram",
        link: "https://instagram.com/"
    },
    {
        icon: "facebook-square",
        link: "https://facebook.com/"
    },
    {
        icon: "twitter",
        link: "https://twitter.com/"
    },
]
const Header = () => {

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
                    <IconLinkGroup iconLinks={iconLinks} color={MainColors.green}/>
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