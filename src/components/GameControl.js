import React from 'react';
import Letters from './Letters';
import Word from './Word'
import { connect } from 'react-redux';
import WinState from './WinState';
import Diagram from './Diagram';
import * as a from './../actions';

class GameControl extends React.Component {
  
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    a.newGame();
    a.setWord();    
  }

  render() {
    return (
      <React.Fragment>
        <WinState/>
        <Diagram currentDiagram={this.props.currentDiagram}/>
        <Word secret={this.props.secretWord} correctLetters={this.this.props.correctLetters} missedLetters={this.props.missedLetters}/>
        <Letters />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    winState: state.winState,
    gameState: state.gameState
  }
};

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;