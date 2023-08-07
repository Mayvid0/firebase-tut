// MovieList.js
import React from 'react';
import MovieItem from './movieitem';

const MovieList = ({ movieList }) => {
    return (
        <div>
            {movieList.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
