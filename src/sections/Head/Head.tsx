import React, {FC} from "react";
import badger from "../../assets/img/Honey_badger.png"

import "./Head.scss";
import Button from "../../components/Button/Button";
import {ButtonTypes} from "../../types/enums/Button/ButtonTypes";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";
import IconLinkGroup from "../../components/IconLinkGroup/IconLinkGroup";
import {MainColors} from "../../types/enums/MainColors";
import {socialLinks} from "../../constants";

const Head: FC = (): JSX.Element => {
    return <div className="header__container container" id={"head"}>
        <h1 className="header__container__tittle">Digitize Store Workflows on ServiceNow</h1>
        <p className="header__container__subtittle">Retail operations can be complicated and difficult to track. With
            StoreWorkflows, you can boost productivity and increase accountability by digitizing workflows on the
            ServiceNow platform.</p>
        <div className="header__container__actions">
            <Button text={"Let`s talk"} className={"head-button"}/>
            <Button
                text={"Learn more"}
                type={ButtonTypes.secondary}
                color={ButtonColors.violet}
                className={"head-button"}
            />
        </div>
        <IconLinkGroup
            iconLinks={socialLinks}
            color={MainColors.green}
            className="header__container__socials"
        />
        <img src={badger} alt="badger" className={"badger"}/>
        <div className="circle"/>
        <div className={"elliptic"}/>
    </div>
};

export default Head;