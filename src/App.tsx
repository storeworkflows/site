import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Discover from "./components/discover/Discover";
import CustomerReviews from './components/customerReviews/CustomerReviews';

function App() {
  return (
    <div className="App">
     <Header />
     <Discover />
     <CustomerReviews/>
    </div>
  );
}

export default App;
