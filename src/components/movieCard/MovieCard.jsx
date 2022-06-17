import React from 'react';
import './movie-card.css';

const MovieCard = ({ movie }) => {

  return (
    <div className='card'>
      <img src={movie.image} alt='img' />
      <h2>{movie.title}</h2>
      <p>{movie.description.slice(0, 6)}</p>
    </div>
  );
}

export default MovieCard;