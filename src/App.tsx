import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Discover from "./components/discover/Discover";
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
     <Header />
     <Discover />
     <Carousel />
    </div>
  );
}

export default App;
