import { FC } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import '../styles/CartList.css';

const CartList: FC = () => {
  const { cartItems } = useShoppingCart();

  const cartItemsList = cartItems.map((item) => {
    return (
      <li key={item.id}>
        <CartItem id={item.id} quantity={item.quantity}></CartItem>
      </li>
    );
  });

  return <ul className='shopping-cart-list'>{cartItemsList}</ul>;
};

export default CartList;
