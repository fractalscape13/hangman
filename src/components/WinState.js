import React from 'react';

const WinState = props => (
  <div className="centerItems">
    <h1>YOU WIN! Play again?</h1>
    <button onClick={()=> props.onReset()}>New Game!</button>
  </div>
)

export default WinState;