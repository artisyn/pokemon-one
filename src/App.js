import React from 'react';
import { useState, useEffect } from 'react';
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
		setTitle(request.data.name);
		console.log(request);
		setPokemon({
			name: request.data.name,
			picture: request.data.sprites.front_default,
			species: request.data.species.name,
		});

		console.log(pokemon);
	};

	return (
		<div className="App">
			<header>
				<input
					type="text"
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
				/>
				<h1> {title}</h1>
			</header>
			<button onClick={showPokemon}>Show Pokemon</button>
			<section>
				{!pokemon.name ? (
					'Please choose a pokemon'
				) : (
					<>
						<h2>{'name ' + pokemon.name}</h2>
						<h3>Species: {pokemon.species}</h3>
						<img src={pokemon.picture} alt="pokemon" />
					</>
				)}
			</section>
		</div>
	);
}

export default App;
