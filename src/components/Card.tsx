import React, { FC } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
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

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(props.carInfo.id);

  return (
    <li className='card'>
      <div className='card-container' style={style}>
        <div className='card-title'>
          <h2 className='car-name'>{props.carInfo.name}</h2>
        </div>
        <h3 className='card-price'>${props.carInfo.price}</h3>
        <div className='card-interface'>
          <div className='card-counter-and-buttons'>
            <button
              className='subtract-btn'
              onClick={() => decreaseCartQuantity(props.carInfo.id)}
            >
              -
            </button>
            <p className='counter'>{quantity}</p>
            <button
              className='add-btn'
              onClick={() => increaseCartQuantity(props.carInfo.id)}
            >
              +
            </button>
          </div>
          {quantity === 0 ? null : (
            <button
              className='add-cart-btn'
              onClick={() => removeFromCart(props.carInfo.id)}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
