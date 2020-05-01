import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Word = props => {
  const ulStyled = styled.ul`
    display: inline-block;
    li {
      display: inline-block;
      border-bottom: 1px solid black;
    }
    span {
      visibility: hidden;
    }
    span.visible {
      visibility: visible;
    }
`;

console.log(props);
  return (
    <ulStyled>
      {props.secret.map((char, i) => 
        <li key={i}>
          <span className={props.correctLetters.includes(char) || props.missedLetters.includes(char) ?'visible':''}>{char}</span>
        </li>
      )}
    </ulStyled>
  )
};

Word.propTypes = {
  secret: PropTypes.array,
  correctLetters: PropTypes.array,
  missedLetters: PropTypes.array
}
export default Word;