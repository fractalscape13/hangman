import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Word = props => {
  
  const ulStyles = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '25px'
  }

  const liStyles = {
    visibility: 'hidden'
  }

  const underline = {
    borderBottom: '1px solid black',
    margin: '0 4px',
    width: '30px',
    display: 'flex',
    justifyContent: 'center',
  }

console.log(props);
  return (
    <ul style={ulStyles}>
      {props.secret.map((char, i) => 
        <div style={underline}>
          <li style={liStyles} key={i}>
            <span className={props.correctLetters.includes(char) || props.missedLetters.includes(char) ?'visible':''}>{char}</span>
          </li>
        </div>
      )}
    </ul>
  )
};

Word.propTypes = {
  secret: PropTypes.array,
  correctLetters: PropTypes.array,
  missedLetters: PropTypes.array
}
export default Word;