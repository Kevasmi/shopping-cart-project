import React, { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
        I will not close if you click outside me. Don't even try to press escape
        key.
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
