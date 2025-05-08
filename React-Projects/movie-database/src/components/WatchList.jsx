import React from 'react';

const WatchList = ({ watchList }) => {
  return (
    <div className="watchlist">
      <h2>My Watchlist</h2>
      {watchList.length > 0 ? (
        <div className="movies">
          {watchList.map((movie) => (
            <div key={movie.title} className="movie-card">
              <h3>{movie.title}</h3>
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Year:</strong> {movie.releaseYear}</p>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Rating:</strong> {movie.rating}</p>
              <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default WatchList;