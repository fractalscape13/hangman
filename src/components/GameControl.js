import React from 'react';
import Letters from './Letters';
import Word from './Word'
import { connect } from 'react-redux';
import WinState from './WinState';
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
    console.log('this.props is after componentDidMount', this.props);
  }


  render() {
    console.log("THIS.PROPS IS: ::::", this.props);
    return (
      <React.Fragment>
        {this.props.gameState.win ? <WinState onReset={this.resetGame}/> : null}
        <Diagram currentDiagram={this.props.gameState.currentDiagram}/>
        <Word 
          secret={this.props.gameState.secretWord} 
          correctLetters={this.props.gameState.correctLetters} 
          missedLetters={this.props.gameState.missedLetters}/>
        <Letters 
          correctLetters={this.props.gameState.correctLetters} 
          missedLetters={this.props.gameState.missedLetters}/>
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