import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
	const { id } = useParams();
	const movie = movies.find((movie) => movie.id === parseInt(id));

	if (!movie) {
		return <h2>Movie not found</h2>;
	}

	return (
		<div className="movie-details">
			<h1>{movie.title}</h1>
			<p>{movie.description}</p>
			<iframe
				width="560"
				height="315"
				src={movie.trailer}
				title={movie.title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<br />
			<Link to="/">Back to Home</Link>
		</div>
	);
};

export default MovieDetails;
