import React from 'react'
import PropTypes from 'prop-types';

const Word = props => {
  const secretArr = props.secret.split('');
  return (
    <ul>
      {secretArr.map((char, i) => 
        <li key={i}>
          <span className={props.guesses.includes(char)?'visible':''}>{char}</span>
        </li>
      )}
    </ul>
  )
};

Word.propTypes = {
  secret: PropTypes.string,
  guesses: PropTypes.array
}
export default Word;