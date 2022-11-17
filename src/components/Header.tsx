import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <li>
            <h1 id='logo'>
              <img
                src='https://listcarbrands.com/wp-content/uploads/2016/02/Koenigsegg-L%D0%BEgo.png'
                alt='Koenigsegg logo'
              />
              Koenigsegg
            </h1>
          </li>
        </Link>
        <Link style={navStyle} to='/megacars'>
          <li>Megacars</li>
        </Link>
        <Link style={navStyle} to='/about-us'>
          <li>About Us</li>
        </Link>
      </ul>
      <button className='shopping-cart'>
        <i className='fa fa-shopping-cart'></i>
      </button>
    </nav>
  );
}

export default Header;
