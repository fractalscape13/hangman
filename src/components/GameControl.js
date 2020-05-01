import React from 'react';
import Letters from './Letters';
import Word from './Word'
import { connect } from 'react-redux';
import WinState from './WinState';
import LoseState from './LoseState';
import Diagram from './Diagram';
import * as a from './../actions/index';

class GameControl extends React.Component {
  
  // constructor(props) {
  //   super(props);
  // }
  
  resetGame = () => {
    const action = a.newGame();
    this.props.dispatch(action);
    const action2 = a.setWord(); 
    this.props.dispatch(action2);  
  }
  
  componentDidMount() {
    this.resetGame();
  }

  handleLetterClick = (letter) => {
    console.log("SECRETWORDDDDDD", this.props.gameState);
    console.log('letter', letter)
    if (this.props.gameState.secretWord.includes(letter)) {
      const guess = {
        secretWord: this.props.gameState.secretWord,
        correctLetters: this.props.gameState.correctLetters,
        char: letter
      };
      if (this.props.gameState.secretWord.length == 1) {
        const winAction = a.winGame();
        this.props.dispatch(winAction);
      }
      const action = a.correctGuess(guess);
      this.props.dispatch(action);
    } else {
      const guess2 = {
        missedLetters: this.props.gameState.missedLetters,
        currentDiagram: this.props.gameState.currentDiagram,
        char: letter
      };
      if (this.props.gameState.currentDiagram == 6) {
        const loseAction = a.loseGame();
        this.props.dispatch(loseAction);
      }
      const action2 = a.wrongGuess(guess2);
      this.props.dispatch(action2);
    }
  }


  render() {
    console.log("THIS.PROPS IS: ::::", this.props);
    return (
      <React.Fragment>
        <div className="endGameZone">
          {this.props.gameState.win ? <WinState onReset={this.resetGame}/> : null}
          {this.props.gameState.lose ? <LoseState onReset={this.resetGame}/> : null}
        </div>
        <Diagram currentDiagram={this.props.gameState.currentDiagram}/>
        <Word 
          secret={this.props.gameState.displayWord}
          correctLetters={this.props.gameState.correctLetters} 
          loseState={this.props.gameState.lose}
          />
        <Letters 
          onLetterClick={this.handleLetterClick}
          alreadyGuessedLetters={[...this.props.gameState.correctLetters, ...this.props.gameState.missedLetters]} 
          winState={this.props.gameState.win}
          loseState={this.props.gameState.lose}
          />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameState: state
  }
};

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;