import React, { FC } from 'react';
import '../styles/Card.css';

interface IProps {
  carInfo: {
    name: string;
    description: string;
    price: number;
    id: string;
    img: string;
  };
  id: string;
}

const Card: FC<IProps> = (props) => {
  const style = {
    background: `url(${props.carInfo.img})`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
  };

  return (
    <li className='card'>
      <div className='card-container' style={style}>
        <div className='card-title'>
          <h2 className='car-name'>{props.carInfo.name}</h2>
        </div>
        <h3 className='card-price'>${props.carInfo.price}</h3>
        <div className='card-interface'>
          <div className='card-counter-and-buttons'>
            <button className='subtract-btn'>-</button>
            <p className='counter'>0</p>
            <button className='add-btn'>+</button>
          </div>
          <button className='add-cart-btn'>Add</button>
        </div>
      </div>
    </li>
  );
};

export default Card;
