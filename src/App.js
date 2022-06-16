import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Css
import './App.css';
// Components
import Header from './components/header/Header';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />

      </div>
    </Router>
  );
}

export default App;