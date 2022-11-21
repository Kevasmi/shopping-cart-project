import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav className='nav-links'>
      <Link style={navStyle} to='/' className='logo-link'>
        <img
          src='https://listcarbrands.com/wp-content/uploads/2016/02/Koenigsegg-L%D0%BEgo.png'
          alt='Koenigsegg logo'
        />
        <h1>Koenigsegg</h1>
      </Link>
      <div className='nav-menu'>
        <Link style={navStyle} to='/megacars' className='megacars-link'>
          Megacars
        </Link>
        <Link style={navStyle} to='/about-us' className='about-link'>
          About Us
        </Link>
        <button className='shopping-cart'>
          <i className='fa fa-shopping-cart'></i>
        </button>
      </div>
    </nav>
  );
}

export default Header;
