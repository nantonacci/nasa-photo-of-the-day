import React from 'react';
import './App.css';
import Menu from './Menu/Menu.js';
import Nasa from './Nasa/Nasa.js';

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Nasa />
    </div>
  );
}

export default App;
