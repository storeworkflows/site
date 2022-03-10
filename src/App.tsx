import React from 'react';
import './App.scss';

import {library} from '@fortawesome/fontawesome-svg-core'
import {faAngleDown, faAngleLeft, faAngleRight, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faFacebookSquare,
    faInstagram,
    faLinkedin,
    faLinkedinIn,
    faTwitter,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'

import Header from "./components/header/Header";
import Discover from "./components/discover/Discover";
import ContactUs from "./components/contactUs/ContactUs";
import avatar from "./assets/img/avatar.webp"
import UserCard from "./components/UserCard/UserCard";
import {MainColors} from "./types/enums/MainColors";

library.add(faAngleDown, faAngleUp, faAngleLeft, faAngleRight,
    faTwitter, faYoutube, faInstagram, faLinkedin, faFacebook, faLinkedinIn, faFacebookSquare)

function App() {

  return (
    <div className="App">
     <Header />
     <Discover />
        <ContactUs />
        <UserCard img={avatar} id={"1"}
                  firstName={"Corgi"}
                  secondName={"Happy"}
                  description={"description"}
                  color={MainColors.green}
                  />

        <UserCard img={avatar} id={"3"}
                  firstName={"Corgi"}
                  secondName={"Happy"}
                  color={MainColors.orange}
        />
        <UserCard img={avatar} id={"3"}
                  firstName={"Corgi"}
                  secondName={"Happy"}
                  color={MainColors.orange}
        />
    </div>
  );
}

export default App;
