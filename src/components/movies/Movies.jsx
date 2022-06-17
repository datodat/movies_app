import { useState } from 'react';
import './movies.css';
import MovieCard from '../movieCard/MovieCard';

const Movies = ({ searchMovie, movies }) => {
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = e => {
    e.preventDefault();

    if(searchWord) {
      searchMovie(searchWord);
      setSearchWord('');
    }
  }

  return (
    <div className='movies'>
      {/* Search */}
      <div className='movies-search'>
        <form onSubmit={handleSearch} >
          <input 
            type='text' 
            placeholder='Search...' 
            maxLength='40'
            value={searchWord}
            onChange={({ target }) => setSearchWord(target.value)}
          />
          <button type='submit' >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      {/* Movies */}
      <div className='movies-flex-div'>
        {movies.length > 0 && movies.map(i => {
          return (
            <MovieCard key={i.id} movie={i} />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;