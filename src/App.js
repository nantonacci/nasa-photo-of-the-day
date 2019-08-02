import React from 'react';
import './App.css';
import Menu from './Menu/Menu.js';
import Nasa from './Nasa/Nasa.js';
import { Container } from './Styles/Styles.js';

function App() {
  return (
    <Container>
      <Menu />
      <Nasa />
    </Container>
  );
}

export default App;
