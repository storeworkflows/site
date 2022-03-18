import React from "react";
import "./Footer.scss"
import Navigation from "../../components/Navigation/Navigation";
import IconLinkGroup from "../../components/IconLinkGroup/IconLinkGroup";
import {navLinks, socialLinks} from "../../constants";
import {MainColors} from "../../types/enums/MainColors";

const Footer = () => {
  return (
    <footer className="footer">
      <Navigation mobile={true} navLinks={navLinks} position="bottom"/>
      <div className="footer__container container">
        <div>E-mail</div>
        <div>Phone number</div>
        <div>
          <IconLinkGroup iconLinks={socialLinks} color={MainColors.blue}/>
        </div>
        <div>Office Address</div>
      </div>
    </footer>
  )
}

export default Footer