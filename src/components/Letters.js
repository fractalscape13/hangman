import React from 'react';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Letters = props => (
  <div {...props}>
    {letters.Map(letter => (
      <li
        key={letter}
        disabled={props.guesses.includes(letter) ? true:false}
        onClick={props.onClick}
        >
          letter
        </li>
    ))}
  </div>
)

export default Letters;