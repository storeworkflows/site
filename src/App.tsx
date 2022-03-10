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
import Avatar from "./components/Avatar/Avatar";

import avatar from "./assets/img/avatar.webp"
import UserCard from "./components/UserCard/UserCard";
import {MainColors} from "./types/enums/MainColors";
import {AvatarImgTypes} from "./types/enums/AvatarImgTypes";
import {UserCardType} from "./types/enums/UserCardType";

library.add(faAngleDown, faAngleUp, faAngleLeft, faAngleRight,
    faTwitter, faYoutube, faInstagram, faLinkedin, faFacebook, faLinkedinIn, faFacebookSquare)

const longDescr = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
function App() {

  return (
    <div className="App">
     <Header />
     <Discover />
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

        <UserCard img={avatar} id={"3"}
                  firstName={"Corgi"}
                  secondName={"Happy"}
                  color={MainColors.orange}
                  type={UserCardType.big}
                  description={longDescr}
        />

        <Avatar img={avatar} type={AvatarImgTypes.big} />
    </div>
  );
}

export default App;
