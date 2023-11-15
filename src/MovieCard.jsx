import React, { useState } from 'react';
import './MovieCard.css';

function MovieCard({ props }) {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
    setSelectedMovie(isClicked ? null : props);
  };

  return (
    <div className={`movie-container ${isClicked ? 'clicked' : ''}`} onClick={handleCardClick}>
      <div className="moviecard">
        <img src={props.Poster} alt={props.Title} />
        <p>{props.Type}</p>
        <p>{props.Year}</p>
        <h1>{props.Title}</h1>
        {isClicked && (
          <div className="description">
            <p>This is a placeholder description...</p>
          </div>
        )}
      </div>
      {selectedMovie && (
        <div className="selected-movie-box">
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          <p style={{color:"#7f00ff"}}><em>Lorem ipsum dolor sit amet,sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.</em></p>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
