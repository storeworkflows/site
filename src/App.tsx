import React from 'react';
import './App.scss';
import Discover from "./components/discover/Discover";
import Header from "./components/header/Header";
import FAQ from "./components/faq";

function App() {
	return (
		<div className="App">
			<Header/>
			<Discover/>
			<FAQ/>
		</div>
	);
}

export default App;
