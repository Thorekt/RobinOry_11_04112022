import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/about'>A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
