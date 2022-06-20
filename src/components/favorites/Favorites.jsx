import React from 'react';
import './favorites.css';
import MovieCard from '../movieCard/MovieCard';

const Favorites = ({ favorites, removeFavorites }) => {
  return (
    <div className='favorites'>
      <p>Favorites</p>
      <div>
        {favorites.length > 0 && favorites.map(i => {
          return <MovieCard 
            key={i.id} 
            movie={i}
            removeFavorites={removeFavorites}
            displayFavorites={true}
          />;
        })}
      </div>
    </div>
  );
}

export default Favorites;