import React from 'react';
import PropTypes from 'prop-types';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const ulStyles = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const liStyles = {
  margin: '0 2px',
  width: '20px',
  display: 'flex',
  justifyContent: 'center'
}

const Letters = props => (
  <ul style={ulStyles} {...props}>
    {letters.map(letter => (
      <li style={liStyles}
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
  correctLetters: PropTypes.array,
  missedLetters: PropTypes.array
}
export default Letters;