import React from 'react';
import PropTypes from 'prop-types';

function ReusableButton(props) {
  return (
    <button onClick={() => props.onButtonPress(props.buttonTarget)}>{props.buttonText}</button>
  );
}

export default ReusableButton;

ReusableButton.propTypes = {
  onButtonPress: PropTypes.func,
  buttonTarget: PropTypes.string,
  buttonText: PropTypes.string
}