import React from 'react';
import Card from './Card';
import carData from '../data/data';
import '../styles/Megacars.css';

function Megacars() {
  const cardArray = carData;
  const cardItems = cardArray.map((car) => {
    return <Card id={car.id} key={car.id} carInfo={car} />;
  });
  return <ul className='card-list'>{cardItems}</ul>;
}

export default Megacars;
