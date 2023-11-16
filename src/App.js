import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import './App.css';


const API_URL = "https://www.omdbapi.com?apikey=5cab2eae";

const App = () => {
  const [movies, setMovies] = useState("");
  const [movie, setMovie] = useState('');
  const [clicked, setClicked] = useState(null)

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };
  const searchMovie = async (id) => {
    const response = await fetch(`${API_URL}&i=${id}`);
    const data = await response.json();
    console.log(data);
    setClicked(data);
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
      {clicked && <MovieModal movie={clicked} setClicked={setClicked} />}
      <h1 style={{ position: 'absolute', left: '100px', top: '30px' }}>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='search for movies'
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button style={{ position: 'absolute', left: '87rem', top: '33px' }} onClick={() => searchMovies(movie)}>Search</button>
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((m) => (
            <MovieCard key={m.imdbID} props={m} searchMovie={searchMovie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h3>Search for movie</h3>
        </div>
      )}
    </div>
  );
};

export default App;