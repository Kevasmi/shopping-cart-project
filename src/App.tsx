import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Megacars from './components/Megacars';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/megacars' element={<Megacars />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
