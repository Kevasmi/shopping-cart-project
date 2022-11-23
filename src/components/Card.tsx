import React from 'react';
import '../styles/Card.css';

function Card() {
  return (
    <li className='card'>
      <section className='card-content'>
        <h2 className='card-title'>CC850</h2>
        <section className='card-body'>
          <h3 className='card-price'>$2,800,000</h3>
          <div className='card-interface'>
            <div className='card-counter-and-buttons'>
              <button className='subtract-btn'>-</button>
              <p className='counter'>0</p>
              <button className='add-btn'>+</button>
            </div>
            <button className='add-cart-btn'>Add</button>
          </div>
        </section>
      </section>
    </li>
  );
}

export default Card;
