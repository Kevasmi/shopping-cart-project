import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  setBackground: React.Dispatch<React.SetStateAction<string>>;
}

const Header: FC<IProps> = (props) => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav className='nav-links'>
      <Link style={navStyle} to='/' className='logo-link'>
        <img
          src='https://www.koenigseggflorida.com/wp-content/themes/DealerInspireDealerTheme/images/logo-footer.png'
          alt='Koenigsegg logo'
        />
        <h1 onClick={() => props.setBackground('./imgs/CC850_HEADER.jpg')}>
          Koenigsegg
        </h1>
      </Link>
      <div className='nav-menu'>
        <Link
          style={navStyle}
          to='/megacars'
          className='megacars-link'
          onClick={() => props.setBackground('./imgs/Black_Background.jpg')}
        >
          Megacars
        </Link>
        <Link
          style={navStyle}
          to='/about-us'
          className='about-link'
          onClick={() => props.setBackground('./imgs/Black_Background.jpg')}
        >
          About Us
        </Link>
        <button className='shopping-cart'>
          <i className='fa fa-shopping-cart'></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
