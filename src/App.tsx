import React from 'react';
import './App.scss';

import {library} from '@fortawesome/fontawesome-svg-core'
import {faAngleDown, faAngleLeft, faAngleRight, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube, faLinkedinIn, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

import Header from "./components/header/Header";
import Discover from "./components/discover/Discover";
import IconLink from "./components/IconLink/IconLink";
import {MainColors} from "./types/enums/MainColors";

library.add(faAngleDown, faAngleUp, faAngleLeft, faAngleRight,
    faTwitter, faYoutube, faInstagram, faLinkedin, faFacebook, faLinkedinIn, faFacebookSquare)

function App() {

  return (
    <div className="App">
     <Header />
     <Discover />
        <IconLink icon={"linkedin-in"} link={"hello"}/>
        <IconLink icon={"youtube"} link={"hello"}/>
        <IconLink icon={"instagram"} link={"hello"}/>
        <IconLink icon={"facebook-square"} link={"hello"}/>
        <IconLink icon={"twitter"} link={"https://twitter.com/?lang=ru"}/>
    </div>
  );
}

export default App;
