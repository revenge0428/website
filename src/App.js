import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = "http://www.omdbapi.com?apikey=5cab2eae";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies(movie);
    }
  };
  

  useEffect(() => {
    searchMovies('Hero Academia');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='search for movies'
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={() => searchMovies(movie)}>Search</button>
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((m) => (
            <MovieCard key={m.imdbID} props={m} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h3>No Movie Found</h3>
        </div>
      )}
    </div>
  );
};

export default App;
