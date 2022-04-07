import React from 'react';

import {About, Footer, Header, Skills, Work} from './container';
import './App.scss'


const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}

export default App