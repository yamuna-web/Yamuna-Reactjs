import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies, removeMovie, addToWatchList }) => {
  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            removeMovie={removeMovie}
            addToWatchList={addToWatchList}
          />
        ))}
      </div>
    </div>
  )
};
export default MovieList;