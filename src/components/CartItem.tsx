import { FC } from 'react';
import { CloseButton, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import carData from '../data/data';
import { formatCurrency } from '../utlities/formatCurrency';

type CartItemProps = {
  id: string;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = carData.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <Stack direction='horizontal' gap={3} className='shop-item'>
      <img
        src={item.img}
        alt='Car'
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'cover',
          borderRadius: '5px',
        }}
      />
      <Stack direction='vertical' gap={4}>
        <h4>{item.name}</h4>
        <Stack direction='horizontal' gap={3}>
          {formatCurrency(item.price)} X {quantity} . . . . . . . . . . . . . .
          . {formatCurrency(item.price * quantity)}{' '}
        </Stack>
      </Stack>
      <CloseButton onClick={() => removeFromCart(id)} variant='white' />
    </Stack>
  );
}

export default CartItem;
