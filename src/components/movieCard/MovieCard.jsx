import React from 'react';
import './movie-card.css';

const MovieCard = ({ movie, addToFavorites, removeFavorites, displayFavorites }) => {

  return (
    <div className='card'>
      <img src={movie.image} alt='img' />
      <h2>{movie.title}</h2>
      <p>{movie.description.slice(0, 6)}</p>
      <button 
        onClick={displayFavorites ? 
          () => removeFavorites(movie.id) :
          () => addToFavorites(movie.id)
        } 
        id='favorites-button'
      >
        {displayFavorites ? 'Remove From Favorites' : 'Add To Favorites'}
      </button>
    </div>
  );
}

export default MovieCard;