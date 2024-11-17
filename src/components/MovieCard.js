import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	return (
		<div className="movie-card">
			<h2>{movie.title}</h2>
			<p>{movie.description}</p>
			<Link to={`/movie/${movie.id}`}>View Details</Link>
		</div>
	);
};

export default MovieCard;
