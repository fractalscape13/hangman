import React from 'react';
import Letters from './Letters';
import Button from './Button';
import Word from './Word'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GameControl extends React.Component {
  state = {
    secretWord: secretword.split(''),
    win: false,
    lose: false,
    correctLetters: [],
    missedLetters: [],
    currentDiagram: missedLetters.length
  }
  constructor(props) {
    super(props);
    
  }

  // handleClick = e => {
  //   const letter = e.target.textContent.toLowerCase();
  //   return this.checkLetter(letter);
  // }
  render() {
    return (
      <React.Fragment>
        <WinState/>
        <Diagram currentDiagram={this.state.currentDiagram}/>
        <Word secret={this.state.secretWord}/>
        <Letters somepropsimnotthinkingofyet={somestate}/>
      </React.Fragment>
    );
  }
}

GameControl.propTypes = {
  
};

const mapStateToProps = state => {
  return {
    
  }
};

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;