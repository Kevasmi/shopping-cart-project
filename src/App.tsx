import React, { FC, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Megacars from './components/Megacars';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App: FC = () => {
  const [background, setBackground] = useState<string>(
    './imgs/CC850_HEADER.jpg'
  );

  return (
    <div
      className='App'
      style={{
        backgroundImage: 'url(' + require(`${background}`) + ')',
      }}
    >
      <Router basename='https://kevasmi.github.io/shopping-cart-project/'>
        <Header setBackground={setBackground}></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/megacars' element={<Megacars />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
