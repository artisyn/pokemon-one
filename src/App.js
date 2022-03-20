import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.scss';
import axios from 'axios';

function App() {
	const [title, setTitle] = useState('Hello React');
	const [pokemon, setPokemon] = useState({});
	const [inputValue, setInputValue] = useState('');

	const showPokemon = async () => {
		const request = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${inputValue}`
		);
		console.log(request);
	};

	return (
		<div className="App">
			<header>
				<input
					type="text"
					onChange={(e) => {
						setInputValue(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<h1> {title}</h1>
			</header>
			<button onClick={showPokemon}>Show Pokemon</button>
			<section></section>
		</div>
	);
}

export default App;
