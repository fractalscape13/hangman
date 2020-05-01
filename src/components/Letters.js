import React from 'react';
import PropTypes from 'prop-types';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const ulStyles = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Letters = props => (
  <ul style={ulStyles} {...props}>
    {letters.map(letter => (
      <li className={(props.alreadyGuessedLetters.includes(letter) ? 'alreadyClicked' : 'clickable')}
      key={letter}
      // disabled={props.correctLetters.includes(letter) || props.missedLetters.includes(letter) ? true:false}
      onClick={props.onClick}
      >
          {letter}
        </li>
    ))}
  </ul>
)
Letters.propTypes = {
  onClick: PropTypes.func,
  alreadyGuessedLetters: PropTypes.array
}
export default Letters;