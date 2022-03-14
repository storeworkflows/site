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
import CustomerReviews from './components/customerReviews/CustomerReviews';
import Avatar from "./components/Avatar/Avatar";

import avatar from "./assets/img/avatar.webp"
import UserCard from "./components/UserCard/UserCard";
import {MainColors} from "./types/enums/MainColors";
import {AvatarImgTypes} from "./types/enums/AvatarImgTypes";
import {UserCardType} from "./types/enums/UserCardType";
import Team from "./sections/Team/Team";
import {IUser} from "./types/interphases/IUser";

library.add(faAngleDown, faAngleUp, faAngleLeft, faAngleRight,
    faTwitter, faYoutube, faInstagram, faLinkedin, faFacebook, faLinkedinIn, faFacebookSquare)

const longDescr = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

const userArr = () => {
    const users: IUser[] = [];
    for(let i = 0; i<8; i++){
        let user: IUser ={
            img: avatar,
            shortDescription: "Amet minim mollit",
            description: longDescr,
            id: i.toString(),
            firstName: `John ${i}`,
            secondName: "Smith"
        }
        users.push(user)
    }
    return users
}

const arr: IUser[] = userArr();

function App() {

  return (
    <div className="App">
     <Header />
     <Discover />
        <Team users={arr}/>
    </div>
  );
}

export default App;
