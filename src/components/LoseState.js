import React from 'react';

const LoseState = props => (
  <div>
    <h1>GAME OVER. This man is dead to the core. Play again?</h1>
    <button onClick={()=> props.onReset()}>New Game!</button>
  </div>
)

export default LoseState;