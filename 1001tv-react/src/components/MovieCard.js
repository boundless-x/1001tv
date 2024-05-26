// src/components/MovieCard.js

import React from 'react';
import './MovieCard.css'; // You can create this CSS file to style your component

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.picture} alt={`${movie.name} Poster`} className="movie-card__image" />
            <div className="movie-card__details">
                <h2 className="movie-card__name">{movie.name}</h2>
                <p className="movie-card__rating">Rating: {movie.rating}</p>
            </div>
        </div>
    );
};

export default MovieCard;

