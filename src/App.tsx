import React from 'react';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

import Header from './sections/Header/Header';
import CustomerReviews from './sections/CustomerReviews/CustomerReviews';

import ContactUs from "./sections/ContactUs/ContactUs";
import avatar from "./assets/img/avatar.webp"
import Team from "./sections/Team/Team";
import { IUser } from "./types/interfaces/IUser";
import FAQ from './sections/FAQ';
import Advantages from './sections/Advantages/Advantages';
import Discover from "./sections/Discover/Discover";
import ProductsAndServices from './sections/ProductsAndServices/ProductsAndServices';

library.add(faAngleDown, faAngleUp, faAngleLeft, faAngleRight,
  faTwitter, faYoutube, faInstagram, faLinkedin, faFacebook, faLinkedinIn, faFacebookSquare)

const longDescr = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

const userArr = () => {
  const users: IUser[] = [];
  for (let i = 0; i < 8; i++) {
    let user: IUser = {
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
      <Advantages />
      <Team users={arr} />
      <CustomerReviews />
      <ProductsAndServices />
      <ContactUs />
      <FAQ/>
    </div>
  );
}

export default App;
