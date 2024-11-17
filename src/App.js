import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetails from "./components/MovieDetails"; // Correctly imported
import "./App.css";

function App() {
	const [movies, setMovies] = useState([
		{
			id: 1,
			title: "Inception",
			description: "A mind-bending thriller about dream invasion.",
			trailer: "https://www.youtube.com/embed/8hP9D6kZseM",
		},
		{
			id: 2,
			title: "Interstellar",
			description: "Exploration beyond our galaxy to save humanity.",
			trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
		},
	]);

	const [titleFilter, setTitleFilter] = useState("");
	const [ratingFilter, setRatingFilter] = useState(0);

	const filteredMovies = movies.filter(
		(movie) =>
			movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
			(!ratingFilter || movie.rating >= ratingFilter)
	);

	return (
		<Router>
			<div className="App">
				<Filter
					setTitleFilter={setTitleFilter}
					setRatingFilter={setRatingFilter}
				/>
				<Routes>
					<Route path="/" element={<MovieList movies={filteredMovies} />} />
					<Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
