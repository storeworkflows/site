import React from 'react';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faYoutube, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Header from "./components/header/Header";
import Discover from "./components/discover/Discover";
import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";

library.add(faAngleDown, faAngleUp, faAngleLeft, faAngleRight,
    faTwitter, faYoutube, faInstagram, faLinkedin, faFacebook )

function App() {

  return (
    <div className="App">
     <Header />
     <Discover />
    </div>
  );
}

export default App;
