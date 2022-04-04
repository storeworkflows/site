import React, {FC, useEffect, useState} from "react";
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

	const [isMobileNav, setIsMobileNav] = useState(window.innerWidth <= 1200);
	const [isMobileHeader, setIsMobileHeader] = useState(window.innerWidth <= 992)
	const handleResize = () => {
		let currentWidth = window.innerWidth;
		setIsMobileHeader(currentWidth <= 992);
		setIsMobileNav(currentWidth <= 1200);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const renderHeader = () => <h1 className="header__container__tittle">
		Digitize
		{isMobileHeader && <br/>}
		Store Workflows
		{isMobileHeader && <br/>}
		on ServiceNow
	</h1>

	return <>
		<div className="header__nav">
			<Navigation mobile={isMobileNav} navLinks={navLinks} />
		</div>
		<section className="header__container container" id={"head"}>
			<img src={badger} alt="badger" className={"badger"}/>
			{renderHeader()}
			<p className="header__container__subtittle">
				Retail operations can be complicated and difficult to track. With
				StoreWorkflows, you can boost productivity and increase accountability by digitizing workflows on the
				ServiceNow platform.
			</p>
			<div className="header__container__actions">
				<Button text={"Let`s talk"} className={"head-button"}/>
				<Button
					text={"Learn more"}
					type={ButtonTypes.secondary}
					color={ButtonColors.orange}
					className={"head-button"}
				/>
			</div>

			<IconLinkGroup
				iconLinks={socialLinks}
				color={MainColors.green}
				className="header__container__socials"
			/>
			<div className="circle"/>
			<div className="elliptic"/>
		</section>
	</>
};

export default Head;
