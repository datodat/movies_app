import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Css
import './App.css';
// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Movies from './components/movies/Movies';
// import TvSeries from './components/tv-series/TvSeries';
import Favorites from './components/favorites/Favorites';
import axios from 'axios';
// APIs
const apiKey = 'k_5ncr48x9'
const apiForMovie = `https://imdb-api.com/en/API/SearchMovie/${apiKey}`

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const searchMovie = word => {
    axios.get(`${apiForMovie}/${word}`)
      .then(res => setMovies(res.data.results))
      .catch(error => console.log(error))
  }

  const addToFavorites = id => {
    const favorite = movies.find(i => i.id === id);
    const alreadyAdded = favorites.some(i => i.id === favorite.id);
    
    if(alreadyAdded){
      alert('This movie is already added to favorites');
    }else{
      setFavorites(favorites.concat(favorite));
    }
  }

  const removeFavorites = id => {
    const newFavorites = favorites.filter(i => i.id !== id);
    setFavorites(newFavorites);
  }

  return (
    <Router>
      <div className='container'>
        <Header />

        <Routes>
          <Route path='/favorites' element={
            <Favorites 
              favorites={favorites} 
              removeFavorites={removeFavorites} 
            />} 
          />
          {/* <Route path='tv-series' element={<TvSeries />} /> */}
          <Route path='/' element={
            <Movies 
              searchMovie={searchMovie} 
              movies={movies}
              addToFavorites={addToFavorites}
            />} 
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;