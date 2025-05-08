import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [actors, setActors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      title,
      director,
      releaseYear: parseInt(releaseYear),
      genre,
      rating: parseFloat(rating),
      actors: actors.split(',').map((actor) => actor.trim()),
    };
    addMovie(movie);
    setTitle('');
    setDirector('');
    setReleaseYear('');
    setGenre('');
    setRating('');
    setActors('');
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Director"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Release Year"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Actors (comma separated)"
        value={actors}
        onChange={(e) => setActors(e.target.value)}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;