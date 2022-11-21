import React from 'react';
import Card from './Card';
import carData from '../data/data';

function Megacars() {
  const cardArray = carData;
  const cardItems = cardArray.map((car) => {
    return <Card key={car.id} />;
  });
  return <ul>{cardItems}</ul>;
}

export default Megacars;
