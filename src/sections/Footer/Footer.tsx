import React from "react";
import "./Footer.scss";
import { navLinks, socialLinks } from "../../constants";
import { MainColors } from "../../types/enums/MainColors";
import Navigation from "../../components/Navigation/Navigation";
import IconLinkGroup from "../../components/IconLinkGroup/IconLinkGroup";

const Footer = () => {
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	return (
		<div className="footer">
			<div className='footer__wrapper'>
				<footer className="container">
					<Navigation className="footer__navigation" mobile={false} navLinks={navLinks} position="bottom" />
					<div className="footer__container">
						<div className="footer__email footer__padding">E-mail: mail@storeworkflows.com</div>
						<div className="footer__phone footer__padding">Phone: +38(099)123-54-58</div>
						<div className="footer__social footer__padding">
							<IconLinkGroup iconLinks={socialLinks} color={MainColors.green} />
						</div>
						<div className="footer__address footer__padding">Ukraine, Kyiv, Sportyvna square 1A, Gulliver BC, Tower B</div>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default Footer