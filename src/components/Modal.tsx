import React, { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CartList from './CartList';

interface IProps {
  handleClose: () => void;
  show: boolean;
}

const ShoppingCart: FC<IProps> = ({ handleClose, show }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartList></CartList>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary'>Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
