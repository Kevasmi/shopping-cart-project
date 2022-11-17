import React from 'react';

function Header() {
  return (
    <nav>
      <ul className='nav-links'>
        <h1 id='logo'>
          <img
            src='https://listcarbrands.com/wp-content/uploads/2016/02/Koenigsegg-L%D0%BEgo.png'
            alt='Koenigsegg logo'
          />
          <a href=''>Koenigsegg</a>
        </h1>
        <li>Megacars</li>
        <li>About Us</li>
      </ul>
      <button className='shopping-cart'>
        <i className='fa fa-shopping-cart'></i>
      </button>
    </nav>
  );
}

export default Header;
