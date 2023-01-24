import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import { useLocation } from 'react-router-dom';

function Navigation() {
  let location = useLocation();
  console.log(location);

  return (
    <nav>
      <ul>
        <li className={location.pathname === '/' ? 'current' : ''}>
          <Link to='/'>Accueil</Link>
        </li>
        <li className={location.pathname === '/about' ? 'current' : ''}>
          <Link to='/about'>A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
