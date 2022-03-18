import React, {FC} from "react";
import badger from "../../assets/img/Honey_badger.png"

import "./Head.scss";
import Button from "../../components/Button/Button";
import {ButtonTypes} from "../../types/enums/Button/ButtonTypes";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";
import IconLinkGroup from "../../components/IconLinkGroup/IconLinkGroup";
import {MainColors} from "../../types/enums/MainColors";
import {navLinks, socialLinks} from "../../constants";
import Navigation from "../../components/Navigation/Navigation";

const Head: FC = (): JSX.Element => {
	return (
		<div className="header">
			<div className="header__nav">
				<Navigation mobile={true}navLinks={navLinks} />
			</div>
			<div className="header__container container">
				<h1 className="header__container__tittle">Digitize Store Workflows on ServiceNow</h1>
				<p className="header__container__subtittle">Retail operations can be complicated and difficult to track. With StoreWorkflows, you can boost productivity and increase accountability by digitizing workflows on the ServiceNow platform.</p>
				<div className="header__container__actions">
					<Button text={"Let`s talk"} />
					<Button text={"Learn more"} type={ButtonTypes.secondary} color={ButtonColors.orange}/>
				</div>
				<div className="header__container__socials">
					<IconLinkGroup iconLinks={socialLinks} color={MainColors.green}/>
				</div>
				<div className="badger">
					<img src={badger} alt="badger"/>
				</div>
			</div>
			<div className="circle"/>
		</div>
	);
};

export default Head;