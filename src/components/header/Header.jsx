import { useState } from 'react';
import { Link } from 'react-router-dom';
// Css
import './header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  window.addEventListener('resize', () => {
    if(window.innerWidth > 600){
      setShowMenu(false);
    }
  })

  return (
    <header className='header'>
      <h1>movies</h1>
      <nav style={{ right: showMenu ? '0' : '-100%' }}>
        <Link 
          onClick={() => setShowMenu(false)} 
          to='/'
        >
          movies
        </Link>
        <Link 
          onClick={() => setShowMenu(false)} 
          to='/tv-series'
        >
          tv series
        </Link>
        <Link 
          onClick={() => setShowMenu(false)} 
          to='/favorites'
        >
          favorites
        </Link>
      </nav>
      <div 
        onClick={() => setShowMenu(!showMenu)} 
        className={showMenu ? 'sandwitch-div sandwitch-clicked' : 'sandwitch-div'}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;