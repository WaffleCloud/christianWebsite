import React, { useState } from 'react';
import './styleSheets/app.css';
import Intro from './components/Intro'
import Bio from './components/Bio';
import Gallery from './components/Gallery'
import Contact from './components/Contact';


function App(props) {

  return (
    <div className="container">
      <Intro/>
      <Bio/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
