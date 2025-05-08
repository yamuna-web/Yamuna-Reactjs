import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import WatchList from './components/WatchList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (title) => {
    setMovies(movies.filter((movie) => movie.title !== title));
  };

  const searchByDirector = (director) => {
    return movies.filter((movie) => movie.director === director);
  };
  

  const highestRatedMovies = () => {
    return [...movies].sort((a, b) => b.rating - a.rating).slice(0, 5);
  };

  const moviesByGenre = (genre) => {
    return movies.filter((movie) => movie.genre === genre);
  };
  const addToWatchList = (title) => {
    const movie = movies.find((m) => m.title === title);
    if (movie && !watchList.includes(movie)) {
      setWatchList([...watchList, movie]);
    }
  };

  return (
    <div className="App">
      <h1>Movie Database</h1>
      <MovieForm addMovie={addMovie} />
      <div className="movie-sections">
        <MovieList
          title="All Movies"
          movies={movies}
          removeMovie={removeMovie}
          addToWatchList={addToWatchList}
        />
        <WatchList watchList={watchList} />
      </div>
    </div>
  );
};

export default App;