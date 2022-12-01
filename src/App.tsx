import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Megacars from './components/Megacars';
import About from './components/About';
import ShoppingCart from './components/Modal';
import './styles/App.css';

const App: FC = () => {
  const [background, setBackground] = useState<string>(
    './imgs/CC850_HEADER.jpg'
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className='App'
      style={{
        backgroundImage: 'url(' + require(`${background}`) + ')',
      }}
    >
      <Router basename='/shopping-cart-project'>
        <Header
          setBackground={setBackground}
          setShow={setShow}
          handleShow={handleShow}
        ></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/megacars' element={<Megacars />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </Router>
      <ShoppingCart handleClose={handleClose} show={show}></ShoppingCart>
    </div>
  );
};

export default App;
