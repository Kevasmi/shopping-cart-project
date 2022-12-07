import { FC } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import '../styles/CartList.css';
import { formatCurrency } from '../utlities/formatCurrency';
import carData from '../data/data';

const CartList: FC = () => {
  const { cartItems } = useShoppingCart();

  const cartItemsList = cartItems.map((item) => {
    return (
      <li key={item.id}>
        <CartItem id={item.id} quantity={item.quantity}></CartItem>
      </li>
    );
  });

  return (
    <ul className='shopping-cart-list'>
      {cartItemsList}
      <li className='total-list-item'>
        <div className='ms-auto fw-bold fs-5'>
          Total:{' '}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = carData.find((item) => item.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </li>
    </ul>
  );
};

export default CartList;
