import React from 'react';
import './App.css';
import GameControl from './components/GameControl';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <GameControl/>
    </React.Fragment>
  );
}

export default App;
