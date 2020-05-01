import React from 'react';
import PropTypes from 'prop-types';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Letters = props => (
  <div {...props}>
    {letters.map(letter => (
      <li
        key={letter}
        // disabled={props.correctLetters.includes(letter) || props.missedLetters.includes(letter) ? true:false}
        onClick={props.onClick}
        >
          {letter}
        </li>
    ))}
  </div>
)
Letters.propTypes = {
  correctLetters: PropTypes.array,
  missedLetters: PropTypes.array
}
export default Letters;