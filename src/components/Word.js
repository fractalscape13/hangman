import React from 'react';
import PropTypes from 'prop-types';

const Word = props => {
  
  const ulStyles = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '25px'
  }

  const liStyles = {
    // visibility: 'hidden',
    fontSize: '50px'
  }

  const underline = {
    borderBottom: '1px solid black',
    margin: '0 4px',
    width: '50px',
    display: 'flex',
    justifyContent: 'center'
    }

  return (
    <ul style={ulStyles}>
      {props.secret.map((char, i) => 
        <div style={underline} key={i}>
          <li style={liStyles} key={i}>
            <span className={props.correctLetters.includes(char) ?null:'hiddenWord'}>{char}</span>
          </li>
        </div>
      )}
    </ul>
  )
};

Word.propTypes = {
  secret: PropTypes.array,
  correctLetters: PropTypes.array
}
export default Word;