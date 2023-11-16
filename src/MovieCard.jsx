// Your JSX file

import React from 'react';
import './MovieCard.css';

function MovieCard({ props, searchMovie }) {
  return (
    <div className='movie-container'>
      <div className='moviecard' onClick={() => searchMovie(props.imdbID)}>
        <img src={props.Poster} alt='poster' />
        <div className='moviecard-content'>
          <p>{props.Type}</p>
          <p>{props.Year}</p>
          <h1>{props.Title}</h1>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
