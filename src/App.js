import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.scss";

function App() {
	const [movies, setMovies] = useState([]);

	function fetchMoviesHandler() {
		fetch("https://swapi.py4e.com/api/films/")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const transformedMoviesData = data.results.map((movieData) => {
					return {
						id: movieData.episode_id,
						title: movieData.title,
						openingText: movieData.opening_crawl,
						releaseDate: movieData.release_date,
					};
				});
				setMovies(transformedMoviesData);
			});
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
