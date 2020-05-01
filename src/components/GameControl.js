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
  
  resetGame = () => {
    a.newGame();
    a.setWord();    
  }
  
  componentDidMount() {
    console.log("Mounted");
    this.resetGame();
    console.log(this.props.gameState);
    
  }

  render() {
    console.log("THIS.PROPS IS:::::", this.props.winState);
    return (
      <React.Fragment>
        {this.props.winState.win ? <WinState onReset={this.resetGame}/> : null}
        <Diagram currentDiagram={this.props.winState.currentDiagram}/>
        <Word 
          secret={this.props.gameState.secretWord} 
          correctLetters={this.props.winState.correctLetters} 
          missedLetters={this.props.winState.missedLetters}/>
        <Letters 
          correctLetters={this.props.winState.correctLetters} 
          missedLetters={this.props.winState.missedLetters}/>
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