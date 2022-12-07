import React, { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { CloseButton } from 'react-bootstrap';
import CartList from './CartList';
import '../styles/Modal.css';

interface IProps {
  handleClose: () => void;
  show: boolean;
}

const ShoppingCart: FC<IProps> = ({ handleClose, show }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
      size='lg'
      className='cart-modal'
    >
      <Modal.Header className='cart-modal-close-btn'>
        <Modal.Title>Your Cart:</Modal.Title>
        <CloseButton onClick={handleClose} variant='white' />
      </Modal.Header>
      <Modal.Body>
        <CartList></CartList>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='light' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
