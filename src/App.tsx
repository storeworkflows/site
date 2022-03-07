import React from 'react';
import './App.scss';

import {library} from '@fortawesome/fontawesome-svg-core'
import {faAngleDown, faAngleLeft, faAngleRight, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

import Header from "./components/header/Header";
import Discover from "./components/discover/Discover";
import Button from "./components/Button/Button";
import {ButtonTypes} from "./types/enums/Button/ButtonTypes";
import {ButtonColors} from "./types/enums/Button/ButtonColors";

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
